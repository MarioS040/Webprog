const db = require('_helpers/db');



module.exports = {
   
    create,
    getArtById
    
};

async function create(params) {

    await db.Article.create(params);
}

async function getArtById(id) {
    return await getArticle(id);
}





async function getArticle(id) {
    const Article = await db.Article.findByPk(id);
    if (!Article) throw 'Article not found';
    return Article;
}