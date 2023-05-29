// 云函数入口文件
const cloud = require('wx-server-sdk')  //  sdk就是微信官方的端口号
//  直接初始化init自动调用执行
cloud.init()  
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
    const id = event.id
    const dbname = event.dbname
    try {
        return await db.collection(dbname)
            .where({ messageuser: id })
            .remove({})
    } catch (e) {
        console.error(e)
    }
}
// 通过云函数调用,使用try语句进行捕获,加强代码的健壮性,返回id的值
