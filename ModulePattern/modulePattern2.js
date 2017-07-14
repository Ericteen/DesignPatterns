/**
 * 私有成员公有化
 * @Author Cheng_Guanghui
 * @Date   2017-07-14T13:15:59+0800
 * @return {prop}                 返回私有成员或方法
 */
var myRevealingModule = function() {

    var privateVar = "Ben Cherry",
        publicVar = "Hey there!";

    function privateFunction() {
        console.log("Name:" + privateVar);
    }

    function publicSetName(strName) {
        privateVar = strName;
    }

    function publicGetName() {
        privateFunction();
    }


    // Reveal public pointers to  
    // private functions and properties

    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };

}();

myRevealingModule.setName("Paul Kinlan");
