// 云函数入口文件
const cloud = require('wx-server-sdk') // sdk端口号

cloud.init()
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
    const id = event.id
    const dbname = event.dbname
    try {
        return await db.collection(dbname)
            .where({ saleid: id })
            .remove({})
    } catch (e) {
        console.error(e)
    }
}
