$("#get-another-quote-button").on("click",function(t){t.preventDefault(),$.ajax({url:"/wp-json/wp/v2/posts/?orderby=rand",success:function(t){var e=t.shift();console.log(e),$("#quote-title").text(e.title.rendered),$("#quote-content").html(e.content.rendered),void 0!==e.custom_meta&&void 0!==e.custom_meta.Source?$("#quote-source").html("Source: "+e.custom_meta.Source):$("#quote-source").text(""),window.history.replaceState({},"",e.link),window.document.title="Quotes on Design"},cache:!1})});
//# sourceMappingURL=qod-min.js.map