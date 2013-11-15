$(document).ready(function  () {
	$(".img-pick").bind("click", function  () {
		$("#img-center").attr("src",$(this).attr('src'));
	})
	$("#img-center").bind("click", function  ($http) {
		var amount = prompt("Ingrese la cantidad del producto a comprar:");
		$.post("//localhost:3000/cart/add_product",
		{
			product_id:1,
			amount: amount
		},
		function  (data, status) {
			console.log("Data :"+data + "\nStatus: "+ status);
		});
	})
})