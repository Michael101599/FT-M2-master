var url = "http://localhost:5000/amigos/";

let showFriends = function(){
        $.get(`${url}`, function(friends){
            friends.forEach(element => {
                let li = document.createElement("li");
                li.id = element.id;
                li.innerHTML = element.name;
                let list = document.getElementById("#lista");
                list.appendChild(li);
            });
        })
    };
    
$("#boton").click(showFriends);

$("#search").click(function(){
    let input = $("#input").val();

    if(input){
        $.get(`${url}/${input}`, function(friend){
            $("#amigo").text(`${friend.name} ${friend.age} ${friend.email}`);
            $("#input").val("");
        })
    }else{
        $("#amigo").text("Ingresa una ID válida");
    }
});

let deleteFriend = function(){
    let input = $("#inputDelete").val();
    let friend;

    $.get(`${url}`, function(f){
        friend = f;
    })

    if(input){
        $.ajax({
            url: `${url}/${input}`,
            type: "DELETE",
            success: function(){
                $("#success").text(`Tu amigo ${friend.name} fue eliminado`);
                $("#inputDelete").val("");
                showFriends();
            }
        })
    }else{
        $("#success").text("Ingresa un ID");
    }
}

