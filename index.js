document.addEventListener("DOMContentLoaded", function () {
  const postForm = document.getElementById("post-form");
  const messageName = document.getElementById("name");
  const messageInput = document.getElementById("message");
  const postList = document.getElementById("post-list");

  postForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const nameContent = messageName.value;
      const messageContent = messageInput.value;
      
      if(nameContent.trim() === ""){
        alert("Please enter a your name");
          return;
      }

      if (messageContent.trim() === "") {
          alert("Please enter a message.");
          return;
      }
      
      const listName = document.createElement("li");
            listName.textContent = nameContent;
            postList.appendChild(listName);
            messageName.value = "";

      const listItem = document.createElement("li");
            listItem.textContent = messageContent;
            postList.appendChild(listItem);
            messageInput.value = "";

            });
        });