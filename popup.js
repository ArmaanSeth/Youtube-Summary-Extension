
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('getURLButton').addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var activeTab = tabs[0];
            var url = activeTab.url;
            var summary= async (url) => { 
                document.getElementById("content-text").innerText="(scroll to the comment section)"
                return await fetch('https://summarize-youtube-4xkdgdx24-armaanseth.vercel.app/?url=' + encodeURIComponent(url)).then((response) => { 
                    return response.json().then((data) => {
                        if (data["text"]) {
                            if(data["text"]=="This is not a youtube page"){
                                
                            }
                            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                                const activeTab = tabs[0];
                                chrome.tabs.sendMessage(activeTab.id, { action: 'comment', comment: data["text"] });
                            });
                        }
                        document.getElementById("loading").classList.add("hide")
                        document.getElementById("content").classList.remove("hide")
                        document.getElementById("getURLButton").innerText="Generate another comment!"
                        }).catch((err) => { 
                            document.getElementById("loading").classList.add("hide")
                            document.getElementById("content").classList.remove("hide")
                            document.getElementById("getURLButton").innerText="ERROR, Click to try again!"
                            document.getElementById("content-text").innerText=""
                            console.log(err); 
                        }) 
                });
            };
            document.getElementById("content").classList.add("hide")
            document.getElementById("loading").classList.remove("hide")
            summary(url)
            
        });
    });
});
