const Mock=require('mockjs');

let db=Mock.mock({
    'data|10-15':[{
        // 'id|+1':1,
        title:'@csentence()',
        content:'@cparagraph()',
        name:'@cname()',
        time1:'@date',
        time2:'@date',
        'due|1':['是','否']
        // 'age|18-25':1
    }]
});

module.exports={
    [`GET /api/users`](req,res){

        res.status(200).json(db);
    },

    [`POST /api/userscreate`](req,res){

        let user=req.body;

        db.data.push(user);
        
        res.status(200).json(user);
    },

    [`POST /api/usersedit`](req,res){

        // let user=req.body;
        // let index=req.index;
        // console.log(req.body)
        let index=req.body.index;
        let user=req.body.user;
        db.data.splice(index,1,user);
        // console.log(db.data)
        res.status(200).json(user);
    },

    [`POST /api/usersdelete`](req,res){

        // let user=req.body;
        // let index=req.index;
        let index = req.body;
        db.data.splice(index,1);
        // console.log(index)
        // db.data.filter(item => item.id != index)

        res.status(200).json(index);
    }
}