// ==UserScript==
// @name         Theseus
// @version       1.0.3
// @description  Scientia dux vitae certissimus/Hayatta en hakiki mürşit ilimdir, fendir/Our true mentor in life is science.
// @match  http://www.sciencedirect.com/*
// @match  http://link.springer.com/*
// @match  http://mil.sagepub.com/*
// @match  http://jcr.sagepub.com/*
// @match  http://asp.sagepub.com/*
// @match  http://nms.sagepub.com/*
// @match  http://ssc.sagepub.com/*
// @match  http://jea.sagepub.com/*
// @match  http://abr.sagepub.com/*
// @match  http://ldx.sagepub.com/*
// @match  http://www.jstor.org/*
// @match  http://onlinelibrary.wiley.com/*
// @match  http://www.springer.com/us/book/*
// @match  http://www.emeraldinsight.com/*
// @match  http://scitation.aip.org/*
// @match  http://ieeexplore.ieee.org/*
// @match  http://clp.oxfordjournals.org/*
// @match  http://www.ncbi.nlm.nih.gov/*
// @match  http://journals.lww.com/*
// @match  http://journals.aps.org/*
// @match  http://ebooks.cambridge.org/*
// @match  http://journals.cambridge.org/*
// @match  http://www.jcronline.org/*
// @match  http://uclajournals.org/*
// @match  http://psycnet.apa.org/*
// @match  http://www.nature.com/*
// @match  http://www.degruyter.com/*
// @match  http://www.cell.com/*
// @match  http://fluidsengineering.asmedigitalcollection.asme.org/*
// @match  http://heattransfer.asmedigitalcollection.asme.org/*
// @match  http://biomechanical.asmedigitalcollection.asme.org/*
// @match  http://www.biochemj.org/*
// @match  http://rspb.royalsocietypublishing.org/*
// @match  http://proceedings.spiedigitallibrary.org/*
// @match  http://bjp.rcpsych.org/*
// @match  http://www.aes.org/e-lib/*
// @match  http://www.ingentaconnect.com/*
// @match  http://papers.sae.org/*
// @match  http://www.amjmed.com/article/*
// @match  http://search.proquest.com/*
// @match  http://iopscience.iop.org/*
// @match  https://www.osapublishing.org/*
// @match  http://www.scientific.net/*
// @match  https://www.spandidos-publications.com/*
// @match  http://aisel.aisnet.org/*
// @match  http://www.healio.com/*
// @match  http://screen.oxfordjournals.org/*
// @match  https://muse.jhu.edu/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant   none
// ==/UserScript==

(function($){
    var article_title;
    var document_url = document.URL, updatedUrl;
    if(document_url.includes("sciencedirect")){
        article_title = ($(".article-title").text().trim() !== "") ? $(".article-title").text().trim() :  $(".svTitle").text().trim();
    }
    if(document_url.includes("link.springer")){
        article_title = ($("div.MainTitleSection > h1").text().trim() !== "") ? $("div.MainTitleSection > h1").text().trim()  : $("#title").text();
    }
    if(document_url.includes("mil.sagepub") || document_url.includes("asp.sagepub") || document_url.includes("abr.sagepub")){
        article_title = $(".cit-title").text().trim();
    }
    if(document_url.includes("jcr.sagepub") || document_url.includes("nms.sagepub") || document_url.includes("ssc.sagepub") || document_url.includes("jea.sagepub") || document_url.includes("ldx.sagepub")){
        article_title = $("#article-title-1").text().trim();
    }
    if(document_url.includes("jstor.org")){
        article_title = $(".rw > cite").text().trim();
    }
    if(document_url.includes("tandfonline")){
        article_title = $('div.hlFld-Title > h2:nth-child(3)').text().trim();
    }
    if(document_url.includes("tandfebooks")){
        article_title = $("div.hlFld-Title > h2:nth-child(3)").text().trim();
    }
    if(document_url.includes("onlinelibrary.wiley")){
        article_title = $("#main-content > header > div.article-header__intro > h1").text().trim();
    }
    if(document_url.includes("springer") && !document_url.includes("link")){
        var title = $('meta[itemprop = "name"]');
        if(typeof title === 'object'){
            article_title = title[0].content;
        }else{
            article_title = title.content;
        }
    }
    if(document_url.includes("emeraldinsight")){
        article_title = $("div > article > h1 > span").text().trim();
    }
    if(document_url.includes("jcronline")){
       article_title = $(".art_title").text().trim();
    }
    if(document_url.includes("clp.oxfordjournals")){
      article_title = $(".pdf-extract-article-title").text().trim();
    }
    if(document_url.includes("journals.aps")){
      article_title = $("div.medium-9.columns > h3").text().trim();
    }
    if(document_url.includes("ebooks.cambridge")){
        article_title = $("header > h1").text().trim();
    }
    if(document_url.includes("journals.cambridge")){
        article_title = $(".description-box > h3 > a").text().trim();
    }
    if(document_url.includes("uclajournals")){
        article_title = $("#articleContent > div.hlFld-Abstract > h1 > div > div").text().trim();
    }
    if(document_url.includes("psycnet.apa")){
        article_title = $("#rdcTitle").text().trim();
    }
    if(document_url.includes("nature")){
        article_title = ($("header > div > h1").text().trim() !== "") ? $("header > div > h1").text().trim() :$("#atl").text();
    }
    if(document_url.includes("degruyter")){
      article_title = $("#mainTitle").text().trim();
    }
    if(document_url.includes("cell.com") || document_url.includes("amjmed.com/article")){
        article_title = $(".articleTitle").text().trim();
    }
    if(document_url.includes("asmedigitalcollection.asme")){
        article_title = $("#scm6MainContent_lblArticleTitle").text().trim();
    }
    if(document_url.includes("biochemj.org") || document_url.includes("rspb.royalsocietypublishing.org")){
        article_title = $("#page-title").text().trim();
    }
    if(document_url.includes("proceedings.spiedigitallibrary.org")){
        article_title = $("#scm6MainContent_lblArticleTitle").text().trim();
    }
    if(document_url.includes("bjp.rcpsych.org")){
        article_title = $("#node33455 > div > div.highwire-cite-title").text().trim();
    }
    if(document_url.includes("aes.org/e-lib")){
        article_title = $("#content > div:nth-child(3) > h2").text().trim();
    }
    if(document_url.includes("ingentaconnect")){
        article_title = $(".abstract-heading").text().trim();
    }
    if(document_url.includes("papers.sae.org")){
        article_title = $("div.cols-dtheader > div > h1").text().trim();
    }
    if(document_url.includes("search.proquest.com")){
        article_title = $("#mainContentLeft > article > h1").text().trim();
    }
    if(document_url.includes("scitation.aip.org")){
        article_title = $('.title-with-crossmark').text().trim();
    }
    if(document_url.includes("ieeexplore.ieee")){
        article_title = $('.title > h1').text().trim();
    }
    if(document_url.includes("ncbi.nlm.nih")){
        article_title =$('#maincontent > div > div.rprt_all > div > h1').text().trim();
    }
    if(document_url.includes("journals.lww")){
        article_title = $('#ej-abstract-view > h2').text().trim();
    }
    if(document_url.includes("iopscience.iop")){
        article_title = $("div.da1.ta1.article-head > h1").text().trim();
    }
    if(document_url.includes("osapublishing.org")){
        article_title = $("#articleContainer > div.col-md-12 > header > div:nth-child(2) > div.col-sm-10 > div > div > h1").text().trim();
    }
    if(document_url.includes("science.sciencemag.org")){
        article_title = $("div.highwire-cite.highwire-cite-highwire-article.highwire-citation-jnl-sci-article.clearfix.has-author-tooltip > header > h1 > div").text().trim();
    }
    if(document_url.includes("scientific.net")){
        article_title = $("div.paper-name").text().trim();
    }
    if(document_url.includes("spandidos-publications")){
        article_title = $("div.content_main > div > h1").text().trim();
    }
    if(document_url.includes("aisel.aisnet")){
        article_title = $("#title > p > a").text().trim();
    }
    if(document_url.includes("healio")){
        article_title = $("div.journals-content > div > div > div > div > h1").text().trim();
    }
    if(document_url.includes("screen.oxfordjournals")){
       article_title = $("#content-block > h1").text().trim();
    }
    if(document_url.includes("muse.jhu.edu")){
       article_title = $("#article-title").text().trim();
    }

    $('body').prepend('<div><a href = "https://docs.google.com/document/d/1h2HFO_IgMA03q7XU_PcSUbXQIbVXV_JB4NanJiJT4ow/pub" class="foot_" > Read me</a><a href = "https://docs.google.com/forms/d/e/1FAIpQLSe8GrHlHc2g43l0FcyVoPNz6CkHLRrWKlBCAKD-txzZdehtvA/viewform" class="foot_"> Give us a feedback </a></div>');
    $('body').prepend('<div><input id = "element" type="text" name="deneme" value="' + article_title + '"> </div> <div><button id = "cc">sci-hub (1)</button><button id="bz">sci-hub (2)</button><button id="libgenArticle">libgen(article)</button><button id="libgenBook">libgen(book)</button><button id="eric">ed.gov</button><button id="googleScholar">scholar</buton><button id="googleSearch">google</button><button id="ecosia">ecosia</button></div>');
    $('body').prepend('<p id="name"> Theseus 0.3  <i>Scientia dux vitae certissimus./Hayatta en hakiki mürşit ilimdir fendir./Our true mentor in life is science.</i> </p>');

    $("#element").css({ width: 1000, height: 30});
    $("#name").css({ margin :0,  fontSize: 9});
    $(".foot_").css({ margin :0,  fontSize: 8});
    $('body').css('text-align','left');
    $('a').css('text-decoration', 'none');
    $('a').css('color' , '#0645AD');

    function domain(document_url) {
        if(document_url.includes(".com")){
            return ".com";
        }
        if(document_url.includes(".org")){
            return ".org";
        }
        if(document_url.includes(".gov")){
            return ".gov";
        }
        if(document_url.includes(".net")){
            return ".net";
        }
    }
    $( "#cc" ).click(function() {
        var key = domain(document_url);
        updatedUrl = document_url.split(key + "/")[0] + key + "." + "sci-hub.cc/" + document_url.split(key + "/")[1];
        window.open( updatedUrl,'_blank');
    });
    $( "#bz" ).click(function() {
        var key = domain(document_url);
        updatedUrl = document_url.split(key + "/")[0] + key + "." + "sci-hub.bz/" + document_url.split(key + "/")[1];
        window.open( updatedUrl,'_blank');
    });
    $( "#libgenArticle" ).click(function() {
        updatedUrl = "http://gen.lib.rus.ec/scimag/?s=+" + $('#element').val().replace(/\ /g, '+') + "&journalid=&v=&i=&p=&redirect=0";
        window.open( updatedUrl,'_blank');
    });
    $( "#libgenBook" ).click(function() {
        updatedUrl = "http://gen.lib.rus.ec/search.php?req=" + $('#element').val().replace(/\ /g, '+') + "&journalid=&v=&i=&p=&redirect=0";
        window.open( updatedUrl,'_blank');
    });
    $( "#googleSearch" ).click(function() {
        updatedUrl = "https://www.google.com.tr/search?q=\"" + $('#element').val().replace(/\ /g, '+') + "\"+filetype%3A+pdf";
        window.open( updatedUrl,'_blank');
    });
    $( "#googleScholar" ).click(function() {
        updatedUrl = "https://scholar.google.com.tr/scholar?hl=en&q=" + $('#element').val().replace(/\ /g, '+');
        window.open( updatedUrl,'_blank');
    });
    $( "#eric" ).click(function() {
        updatedUrl = "http://eric.ed.gov/?q=" + $('#element').val().replace(/\ /g, '+') + "&ft=on";
        window.open( updatedUrl,'_blank');
    });
    $( "#ecosia" ).click(function() {
        updatedUrl = "https://www.ecosia.org/search?q=" + $('#element').val().replace(/\ /g, '+') + "+filetype%3A+pdf";
        window.open( updatedUrl,'_blank');
    });
})(jQuery);


