
exports.get404 = (req,res,next) => {
    // res.status(404).sendFile("views/404.html", {root: '.'})
    res.status(404).render('404', {pageTitle : 'Page Not Found', path:"/404"});
}
