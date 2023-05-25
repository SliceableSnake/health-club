function healthclub(){
	let firstName;
	firstName=document.getElementById("fname").value;
	let Surname;
	Surname=document.getElementById("lname").value;
	let membership=Number(0);
	let peak;
	peak=document.getElementById("yorn").value;
	if (peak==="Peak")
	{
		membership=30
	}
	else
	{
		membership=20
	}
	if (document.getElementById("swim").checked)
	{
		membership=membership+10
		if (document.getElementById("tennis").checked)
		
		{
			membership=membership+10
			document.getElementById("message").value="Info: "+`${firstName} ${Surname} wants ${peak} membership with access to the swimming pool and tennis courts. Total membership price is ${membership}.`;
		}
		else
		{
			document.getElementById("message").value="Info: "+`${firstName} ${Surname} wants ${peak} membership with access to the swimming pool. Total membership price is ${membership}.`;
		}
	
	}
	else if (document.getElementById("tennis").checked)
	{
		membership=membership+10
		document.getElementById("message").value="Info: "+`${firstName} ${Surname} wants ${peak} membership membership with access to the tennis courts. Total membership price is ${membership}.`;
	}
	else
	{
		document.getElementById("message").value="Info: "+`${firstName} ${Surname} wants ${peak} membership. Total membership price is ${membership}.`;
	}
}