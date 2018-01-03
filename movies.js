function printAvatar(){
    console.log("Avatar: PG-13");
	return 'Avatar: PG-13';
}

function printChappie(){
    console.log("Chappie: R");
}

//What gets exported is determined by 'module.exports' variable
module.exports.avatar = printAvatar;