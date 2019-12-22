const schedule = require('node-schedule')

module.exports = app => {
    schedule.scheduleJob('*/1 * * * *', async function () {
        const  usersCount = await app.db('users').count('id').first()
        const  defaultingCount = await app.db('client_analysis').count('id').first()

        const { Stat } = app.api.stat

        const lastStat = await Stat.findOne({}, {}, 
            { sort: { 'createdAt': -1 } })
        
        const stat = new Stat({
            users: usersCount.count,
            defaultingCustomer: defaultingCount.count,
            createdAt: new Date()
        })

        const changeUsers = !lastStat || stat.users !== lastStat.users
        const changedefaulting = !lastStat || stat.defaultingCustomer !== lastStat.defaultingCustomer
        
        if(changeUsers || changedefaulting) {
            stat.save().then(() => console.log('[Stats] Estátísticas atualizadas!'))
        }
    })
}