$("body").on("keyup",".from_price",function(){var n,t,i,r,u;showLoader();n=0;$(".available").is(":checked")&&(n=1);t=0;$(".discount").is(":checked")&&(t=1);i=0;$(".isNew").is(":checked")&&(i=1);r=0;$(".isHit").is(":checked")&&(r=1);u=0;$(".top_month").is(":checked")&&(u=1);$.ajax({type:"GET",url:"/catalog/filter",data:{from:$(".from_price").val(),to:$(".to_price").val(),category_id:$(".category_id").val(),available:n,discount:t,isNew:i,isHit:r,top_month:u},success:function(n){$(".tablet-version-hide").html(n);hideLoader()}})});$("body").on("keyup",".to_price",function(){var n,t,i,r,u;showLoader();n=0;$(".available").is(":checked")&&(n=1);t=0;$(".discount").is(":checked")&&(t=1);i=0;$(".isNew").is(":checked")&&(i=1);r=0;$(".isHit").is(":checked")&&(r=1);u=0;$(".top_month").is(":checked")&&(u=1);$.ajax({type:"GET",url:"/catalog/filter",data:{from:$(".from_price").val(),to:$(".to_price").val(),category_id:$(".category_id").val(),available:n,discount:t,isNew:i,isHit:r,top_month:u},success:function(n){$(".tablet-version-hide").html(n);hideLoader()},error:function(){hideLoader();Swal.fire("Упс!","Что-то пошло не так.","error")}})});$("body").on("click",".available",function(){var n,t,i,r,u;showLoader();n=0;$(".available").is(":checked")&&(n=1);t=0;$(".discount").is(":checked")&&(t=1);i=0;$(".isNew").is(":checked")&&(i=1);r=0;$(".isHit").is(":checked")&&(r=1);u=0;$(".top_month").is(":checked")&&(u=1);$.ajax({type:"GET",url:"/catalog/filter",data:{from:$(".from_price").val(),to:$(".to_price").val(),category_id:$(".category_id").val(),available:n,discount:t,isNew:i,isHit:r,top_month:u},success:function(n){$(".tablet-version-hide").html(n);hideLoader()},error:function(){hideLoader();Swal.fire("Упс!","Что-то пошло не так.","error")}})});$("body").on("click",".discount",function(){var n,t,i,r,u;showLoader();n=0;$(".available").is(":checked")&&(n=1);t=0;$(".discount").is(":checked")&&(t=1);i=0;$(".isNew").is(":checked")&&(i=1);r=0;$(".isHit").is(":checked")&&(r=1);u=0;$(".top_month").is(":checked")&&(u=1);$.ajax({type:"GET",url:"/catalog/filter",data:{from:$(".from_price").val(),to:$(".to_price").val(),category_id:$(".category_id").val(),available:n,discount:t,isNew:i,isHit:r,top_month:u},success:function(n){$(".tablet-version-hide").html(n);hideLoader()},error:function(){hideLoader();Swal.fire("Упс!","Что-то пошло не так.","error")}})});$("body").on("click",".isNew",function(){var n,t,i,r,u;showLoader();n=0;$(".available").is(":checked")&&(n=1);t=0;$(".discount").is(":checked")&&(t=1);i=0;$(".isNew").is(":checked")&&(i=1);r=0;$(".isHit").is(":checked")&&(r=1);u=0;$(".top_month").is(":checked")&&(u=1);$.ajax({type:"GET",url:"/catalog/filter",data:{from:$(".from_price").val(),to:$(".to_price").val(),category_id:$(".category_id").val(),available:n,discount:t,isNew:i,isHit:r,top_month:u},success:function(n){$(".tablet-version-hide").html(n);hideLoader()},error:function(){hideLoader();Swal.fire("Упс!","Что-то пошло не так.","error")}})});$("body").on("click",".isHit",function(){var n,t,i,r,u;showLoader();n=0;$(".available").is(":checked")&&(n=1);t=0;$(".discount").is(":checked")&&(t=1);i=0;$(".isNew").is(":checked")&&(i=1);r=0;$(".isHit").is(":checked")&&(r=1);u=0;$(".top_month").is(":checked")&&(u=1);$.ajax({type:"GET",url:"/catalog/filter",data:{from:$(".from_price").val(),to:$(".to_price").val(),category_id:$(".category_id").val(),available:n,discount:t,isNew:i,isHit:r,top_month:u},success:function(n){$(".tablet-version-hide").html(n);hideLoader()},error:function(){hideLoader();Swal.fire("Упс!","Что-то пошло не так.","error")}})});$("body").on("click",".top_month",function(){var n,t,i,r,u;showLoader();n=0;$(".available").is(":checked")&&(n=1);t=0;$(".discount").is(":checked")&&(t=1);i=0;$(".isNew").is(":checked")&&(i=1);r=0;$(".isHit").is(":checked")&&(r=1);u=0;$(".top_month").is(":checked")&&(u=1);$.ajax({type:"GET",url:"/catalog/filter",data:{from:$(".from_price").val(),to:$(".to_price").val(),category_id:$(".category_id").val(),available:n,discount:t,isNew:i,isHit:r,top_month:u},success:function(n){$(".tablet-version-hide").html(n);hideLoader()},error:function(){hideLoader();Swal.fire("Упс!","Что-то пошло не так.","error")}})})