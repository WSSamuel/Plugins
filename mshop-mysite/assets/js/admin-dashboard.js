jQuery(function(e){"use strict";function t(s){s.removeClass("processing").unblock()}var n=function(s){return s.is(".processing")||s.parents(".processing").length};e(document).ready(function(){var s;s=e(".msov-notices"),n(s)||s.addClass("processing").block({message:null,overlayCSS:{background:"#fff",opacity:.6}}),e.ajax({type:"post",dataType:"jsonp",url:msov_admin_dashboard.url,success:function(s){s&&e.each(s,function(s,t){var n="<tr>",n=(n+='<td class="title"><a target="_blank" href="'+t.permalink+'">'+t.post_title+"</a></td>")+('<td class="date">| '+t.date.substring(0,10)+"</td>")+"</tr>";e(".msov-notices").append(n)}),t(e(".msov-notices"))},error:function(s){t(e(".msov-notices"))}})})});