console.log("INGECTION COMPLETE")
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
    if(request.action === 'comment') {
        const tmp = document.getElementById("placeholder-area")
        tmp.click()
        const commentDialog=document.getElementById("comment-dialog");
        console.log(commentDialog)
        if (commentDialog){
            const commentDiv = document.getElementById('contenteditable-root');
            console.log(commentDiv)
            commentDiv.innerText = request.comment;
            var commentButton
            setTimeout(()=>{
                commentButton = document.getElementById("submit-button").getElementsByClassName('yt-spec-button-shape-next yt-spec-button-shape-next--filled yt-spec-button-shape-next--disabled yt-spec-button-shape-next--size-m')[0];
                if (commentButton) {                    
                    commentButton.classList.remove("yt-spec-button-shape-next--disabled");
                    commentButton.classList.add("yt-spec-button-shape-next--call-to-action");
                    commentButton.disabled=false;
                    commentButton.click();
                }
            },1000)
        }else{
            sendResponse({ success: false, message: 'Comment div not found.' });
        }
    }
});
  