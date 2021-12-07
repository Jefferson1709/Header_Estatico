package view;

import helper.Utils;
import model.Cliente;
import model.Conta;

public class Teste {

	public static void main(String[] args) {
		
		Cliente Jefferson = new Cliente(
				"Jefferson santos",
				"Jefferson@gmail.com",
				"123.456.789.01",
				Utils.stringParaData("17/09/1992")
				);
		
		Cliente jose = new Cliente(
				"Jose Raimundo",
				"jose@gmail.com",
				"234.567.890.12",
				Utils.stringParaData("23/02/1978")
				);
		
//		System.out.println(Jefferson);
//		System.out.println();
//		System.out.println(jose);
		
		Conta c101 = new Conta(Jefferson);
		Conta c102 = new Conta(jose);
		
		//Depositando um valor positivo
		c101.depositar(500.00);
		c102.depositar(500.00);
		
		//Depositando um valor 0
//		c101.depositar(0.00);
//		c102.depositar(0.00);
		
		//Depositando um valor negativo
//		c101.depositar(-500.00);
//		c102.depositar(-500.00);
		
		//Tentando sacar valor no saldo suficiente
		//c101.sacar(300.0);
		
		//Tentando sacar valor 0
		//c101.sacar(0.0);
		
		//Tentando sacar valor negativo
		//c101.sacar(-100.0);
		
		//Setando um limite para a c101
		c101.setLimite(200.0);
		
		//Tentando sacar um valor maior que o saldo
		//c101.sacar(600.0);
		
		c101.transferir(c102, 100.0);
		
		
		System.out.println(c101);
		System.out.println();
		System.out.println(c102);

	}

}
