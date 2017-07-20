function Player(name, teamColor) {
    this.name = name;
    this.teamColor = teamColor;
    this.state = 'alive';
}

Player.prototype = {
    win: function() {
        console.log(this.name + ' won.');
    },

    lose: function() {
        console.log(this.name + ' lost.');
    },

    die: function() {
        this.state = 'dead';
        playerDirector.receiveMessage('playerDead', this);
    },

    remove: function() {
        playerDirector.receiveMessage('removePlayer', this);
    },

    changeTeam: function(color) {
        playerDirector.receiveMessage('changeColor', this, color);
    }
};

var playerFactory = function(name, teamColor) {
    var newPlayer = new Player(name, teamColor);
    playerDirector.receiveMessage('addPlayer', newPlayer);

    return newPlayer;
};


var playerDirector = (function() {
    var players = {}, // 保存所有玩家
        operations = {}; // 中介者可以执行的操作
    /****************新增一个玩家***************************/
    operations.addPlayer = function(player) {
        var teamColor = player.teamColor; // 玩家的队伍颜色
        players[teamColor] = players[teamColor] || []; // 如果该颜色的玩家还没有成立队伍，则新成立一个队伍
        players[teamColor].push(player); // 添加玩家进队伍
    };
    /****************移除一个玩家***************************/
    operations.removePlayer = function(player) {
        var teamColor = player.teamColor, // 玩家的队伍颜色
            teamPlayers = players[teamColor] || []; // 该队伍所有成员
        for (var i = teamPlayers.length - 1; i >= 0; i--) { // 遍历删除
            if (teamPlayers[i] === player) {
                teamPlayers.splice(i, 1);
            }
        }
    };
    /****************玩家换队***************************/
    operations.changeTeam = function(player, newTeamColor) { // 玩家换队
        operations.removePlayer(player); // 从原队伍中删除
        player.teamColor = newTeamColor; // 改变队伍颜色
        operations.addPlayer(player); // 增加到新队伍中
    };
    operations.playerDead = function(player) { // 玩家死亡
        var teamColor = player.teamColor,
            teamPlayers = players[teamColor]; // 玩家所在队伍
        var all_dead = true;
        for (var i = 0, len = teamPlayers.length; i < len; i++) {
            if (teamPlayers[i].state !== 'dead') {
                all_dead = false;
                break;
            }
        }
        if (all_dead === true) { // 全部死亡
            for (var j = 0, l = teamPlayers.length; j < l; j++) {
                teamPlayers[j].lose(); // 本队所有玩家 lose
            }
            for (var color in players) {
                if (color !== teamColor) {
                    var teamPlayer = players[color]; // 其他队伍的玩家
                    for (var k = 0, le = teamPlayer.length; k < le; k++) {
                        teamPlayer[k].win(); // 其他队伍所有玩家 win
                    }
                }
            }
        }
    };
    var reciveMessage = function() {
        var message = Array.prototype.shift.call(arguments); // arguments 的第一个参数为消息名称
        operations[message].apply(this, arguments);
    };
    return {
        reciveMessage: reciveMessage
    };
})();
