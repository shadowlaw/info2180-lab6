window.onload = main;

function ajax_word_query(word, all){
    let httpRequest = new XMLHttpRequest();
    let url = `/request.php?q=${word}&all=${all}`;
    
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === XMLHttpRequest.DONE ){
            if(httpRequest.status === 200){
                let response = httpRequest.responseText;
                update_results(response);
            }else{
                alert("There was some error");
            }
        }
    }
    
    httpRequest.open("GET", url, true);
    httpRequest.send();
}

function update_results(response){
    document.getElementById("update").innerHTML = response;
}

function main(){
    let submit = $("#submission")[0];
    let submitAll = $("#all")[0];
    
    submit.onclick = function(event){
        event.preventDefault();
        ajax_word_query(document.getElementsByName("q")[0].value.toLowerCase(),false);
    };
    
    submitAll.onclick = function(event){
        event.preventDefault();
        ajax_word_query('', true);
    }
    
}