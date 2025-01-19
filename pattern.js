for(i=1;i<=4;i++){
    rowContent=""
    for(j=1;j<=4;j++){
     rowContent+=i+" "
    }
console.log(rowContent);
}


for(i=1;i<=4;i++){
    rowContent=""
    for(j=1;j<=4;j++){
      rowContent+=j+" "
    }
console.log(rowContent)
}


for(i=1;i<=5;i++){
    rowContent=""
    for(j=1;j<=i;j++){
        rowContent+="* "
    }
    console.log(rowContent)
}


for(i=1;i<=5;i++){  
                                       
                                                     
    console.log("# # # # ")
}
for(i=1;i<=4;i++){
    rowContent=" "
    for(j=1;j<=4;j++){
        rowContent
    }
    console.log(rowContent)
}

for(i=1;i<=5;i++){
    rowContent=""

for(j=1;j<=i;j++){
   rowContent+=j+" "
}
console.log(rowContent);
}


for(row=1;row<=4;row++){
    rowContent=""
    for(space=3;space>=row;space--){
        rowContent+=" "
    }
    for(col=1;col<=row;col++){
    rowContent+="* "
    }
    console.log(rowContent);
}


for(row=1;row<=4;row++){
    rowContent=""
    for(space=3;space>=row;space--){
        rowContent+=" "
    }
    for(col=1;col<=row;col++){
        rowContent+="* "
    }
}
console.log("--------------------------")

for ( row = 1; row <= 4; row++) {
    rowContent = "";
   for ( col = 1; col <= 7; col++) {
       if (row == 1 & (col == 1 || col ==3 || col == 5 || col ==7)) {
           rowContent += "*";
       } else if (row == 2 & (col ==2 || col == 6)) {
           rowContent += "*";
       } else if (row == 3 & (col == 3 || col == 5)) {
           rowContent += "*";
       } else if (row == 4 & col ==4) {
           rowContent += "*";
       } else {
           rowContent += " ";
       }
   }
   console.log(rowContent);
}



