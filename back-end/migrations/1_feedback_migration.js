const FeedBack = artifacts.require("feedback")

module.exports = function (deployer){
    deployer.deploy(FeedBack)
}