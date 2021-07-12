var images = 
["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRZfQwaYIrZeLV_VjUPYaVmcL4PLNCx5KdQ&usqp=CAU",
    "https://media-exp3.licdn.com/dms/image/C5603AQFdhoswgwi8Pw/profile-displayphoto-shrink_200_200/0/1553127993107?e=1631750400&v=beta&t=xoa6dCzxVUeB4dME5SwuUKI1zBV79rcCckVei4nE-Gk",
"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.18169-0/c0.0.206.206a/p206x206/163851_10150108316962292_7324213_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=da31f3&_nc_ohc=qNJQtvbUUsoAX_855FO&_nc_ht=scontent-sjc3-1.xx&oh=7c91801efc84bcf550be26b8a3d52523&oe=60F225C6",
"https://scontent-sjc3-1.xx.fbcdn.net/v/t15.5256-10/c0.53.206.206a/p206x206/13602241_10154373621737292_176113347_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=08638f&_nc_ohc=EOOJtYfuLgwAX_MJu0W&_nc_ht=scontent-sjc3-1.xx&oh=bd73f671d408bb4fcad33c3f237a7dc3&oe=60F2418E",
"https://s3-whjr-v2-prod-bucket.whjr.online/baee195c-538c-428c-8b61-53c8cb1b2098.jpg"
];
var names = ["Family Book",
    "Aloysuis Martis",
"Vidya Martis",
"Kiaan Martis",
"Miyara Martis"
];
var i = 0;
function update()
{
    
    i++;
    var number_of_family_members_in_array = 4
    if(1 > number_of_family_members_in_array)
    {
        i = 0
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}