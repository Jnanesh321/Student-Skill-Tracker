function getSkills(req,res){
    let skills=[{
        id:1,
        name:"Javascript",
        progress:50
    },
    {
        id:2,
        name:"Go",
        progress:20
    }];
    res.send(skills);
}
module.exports = getSkills;