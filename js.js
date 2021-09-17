

			function iniciarValidacao() {
				var user = document.getElementById('nameplayer').value
				var senha = document.getElementById('password').value
				var confirmsenha = document.getElementById('confirmpassword').value

				if(user == "") {
					alert("Insira seu nome completo")
				}

				else if (user.indexOf(" ") == -1){
					alert("Insira seu nome completo")
				}

				
				else if (senha != confirmsenha){
					alert("As senhas não são correspondentes")
				}


			}
		