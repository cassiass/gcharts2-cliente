function desenharGraficos(){

	//grafico de pizza
	var tabela = new google.visualization.DataTable();
	//colunas da tabela
	tabela.addColumn('string','categorias');
	tabela.addColumn('number', 'valores');
	//linhas da tabela
		tabela.addRows([
			['Educação',2000],
			['Transporte',500],
			['Lazer',230],
			['Saúde',50],
			['Cartão de crédito',900],
			['Alimentação',260]
		]);	
	//opcoes que customizam o grafico
		var opcoes = {
			title:'Tipos de Gastos',
			height: 400,
			width: 800,
			is3D: true,
			legend: 'labeled',
			pieSliceText: 'value',
			//colors:['grey', 'red', 'yellow', 'blue', 'pink', 'purple']
			slices: 
				{
					1:{color:'grey'},
					2:{color:'#a6a6a6'},
					4:{offset: 0.4},
					3:{color:'grey'},
					5:{color:'grey'}
				}
			};
	//desenhando grafico
	var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
			grafico.draw(tabela, opcoes);

	//grafico de linha
	tabela = new google.visualization.DataTable();
	//colunas da tabela
	tabela.addColumn('string','mês');
	tabela.addColumn('number', 'gastos');
	//linhas da tabela
		tabela.addRows([
			['jan',800],
			['fev',400],
			['mar',1100],
			['abr',400],
			['mai',500],
			['jun',750],
			['jul',1500],
			['ago',650],
			['set',850],
			['out',400],
			['nov',1000],
			['dez',720]
		]);
	//opcoes que customizam o grafico
		var opcoes = {
			title: 'Gastos por mês',
			width: 650,
			height: 300,
			vAxis: 
				{
				format: 'currency', 
				gridlines: {
							count:5, 
							color: 'transparent'
							}
				},
				curveType: 'function',
				legend: 'none'
			}


	var grafico = new google.visualization.LineChart(document.getElementById('graficoLinha'));
	grafico.draw(tabela, opcoes);


	//grafico de colunas
	var tabela = google.visualization.arrayToDataTable(
		[
			['Mês','Entrada','Saída'],
			['jan',2500,1000],
			['fev',2000,500 ],
			['mar',3000,1300],
			['abr',1500,1700],
			['mai',5000,2250],
			['jun',3567,3000],
			['jul',3452,1468],
			['ago',1833,5250],
			['set',3803,5500],
			['out',1800,1000],
			['nov',3569,1500],
			['dez',3000,1740]

		]);

	var opcoes = {

		title: 'Entradas e saídas da conta',
		width: 800,
		height: 400,
		vAxis: {
					gridlines:{color:'transparent'},
					format: 'currency',
					title: 'Valores'
				},
		hAxis: { 
					title: 'Mês'
			}
	}


	var grafico = new google.visualization.ColumnChart(
				document.getElementById('graficoColuna'));
	grafico.draw(tabela, opcoes);

	//grafico de barras
	var dadosJson = $.ajax({
		url: 'https://gist.githubusercontent.com/cassiass/818b5ffe45b97d2eee6c07733666d3d3/raw/3d43823ceea735ddbd0590fda254214fb8613273/dados.json',
		dataType: 'json',
		async: false
	}).responseText

	var tabela = new google.visualization.DataTable(dadosJson);
	
	//ordenando a tabela pela coluna de indice 1
		tabela.sort([{ column: 1, desc: true }]);

		var opcoes = {
			title: 'Tipos de Gastos',
			height: 400,
			width: 800,
			vAxis: {
					gridlines: 
					{ 
						count: 0, color: 'transparent'
					}},
			legend: 'none',
			hAxis: { 
					gridlines: 
						{
							color: 'transparent'
						},
					format: 'currency',
					textPosition: 'none'
					},
			annotations: 
					{
						alwaysOutside: true
					}
		}	

	
		var grafico = new google.visualization.BarChart(
			document.getElementById('graficoBarras'));
		grafico.draw(tabela, opcoes);

	//grafico de barras com arquivo json
		
		//grafico de barras com arquivo json
	const socket = io.connect('https://gcharts2-servidor.herokuapp.com/');
	
	
	 var graficoBarra = new google.visualization.BarChart(document.getElementById('graficoBarrasJson'));

	socket.on('atualizaBarras', function(dadosJson){
	      var tabela = new google.visualization.DataTable(dadosJson);

		 var opcoesBarra = {
		      title: 'Usuários e Poupanças',
		      height: 400,
		      width: 800,
		      legend: 'none',
		      hAxis: {
			gridlines: {
			  color: 'transparent'
			},
			textPosition: 'none'
		      },
		      annotations: 
		      {
			alwaysOutside: true
		      }
    		}

	      tabela.sort([{ column: 1, desc: true }]);
		graficoBarra.draw(tabela, opcoesBarra);
			
		});
	
			


//grafico de barras empilhadas
	var tabela = new google.visualization.DataTable();	

	tabela.addColumn('date','anos');
	tabela.addColumn('number','Conta poupança');
	tabela.addColumn('number','Conta salário');
	tabela.addColumn('number','Conta corrente');
	tabela.addColumn('number','Cartão de crédito');

	tabela.addRows([
		[new Date('2012'),600,130,230,700],
		[new Date('2013'),200,175,210,150],
		[new Date('2014'),150,500,220,900]
	]);
    
   /* var tabela = google.visualization.arrayToDataTable(
		[	

			['Conta poupança','Conta salário','Conta corrente','Cartão de crédito'],
			[600, 500, 230, 900]
			
		]);*/

	//opcoes que customizam o grafico
		var opcoes = {

			title:'Tipos de contas por categoria',
			height: 400,
			width: 900,
			legend: 'labeled',	
			isStacked: 'absolute',
			bar: { groupWidth: '55%' },
			hAxis: {minValue: 0, gridlines: {color:'transparent'}},
			//vAxis: { gridlines: { count: 3 } }
			//vAxis: {format: 'yy'}
		};

	//desenhando grafico
	var grafico = new google.visualization.BarChart(document.getElementById('graficoBarrasEmpilhadas'));
			grafico.draw(tabela, opcoes);


//grafico de colunas
/* no contexto do Bytebank, poderíamos falar que o banco passou a oferecer aos clientes o benefício de milhas (ou pontos). 
 Aí podemos montar um gráfico que mostra quantas milhas um usuário conseguiu juntar a cada mês. */
 /*o Bytebank costuma aumentar o limite de crédito quanto mais a pessoa usa o cartão. 
 Assim, faríamos no eixo y os valores dos limites e no eixo x tipo *1º aumento*, *2º aumento*,... 
 aí, o gráfico mostraria as categorias de gastos, se cresceu ou diminuiu conforme o usuário recebeu um aumento de crédito. 
 Acho que seria um gráfico interessante para o banco, nem tanto para o usuário final, 
 mas até aí podemos falar que eles pediram para que montássemos uma visualização para uma apresentação institucional, 
 onde eles queriam observar se as pessoas passam a gastar mais, conforme recebem mais crédito e em que áreas especificamente.*/
//grafico de colunas empilhadas
	/*var tabela = new google.visualization.DataTable();
	
	tabela.addColumn('string','gastos por categoria');
	tabela.addColumn('number','Educação');
	tabela.addColumn('number','Transporte');
	tabela.addColumn('number','Lazer');
	tabela.addColumn('number','Cartão de crédito');
	tabela.addColumn('number','Saúde');
	tabela.addColumn('number','Alimentação');

	tabela.addRows([
		['gastos por categoria',2000,500,230,50,900,260]
	]);*/
    
    var tabela = google.visualization.arrayToDataTable(
		[	

	['aumentos','1 aumento', '2 aumento', '3 aumento', '4 aumento', '5 aumento',
         '6 aumento', { role: 'annotation' } ],
        [new Date('2012, 12, 16'), 10, 24, 20, 32, 18, 5, ''],
        [new Date('2013, 12, 16'), 16, 22, 23, 30, 16, 9, ''],
        [new Date('2014, 12, 16'), 28, 19, 29, 30, 12, 13, '']
			
		]);

	//opcoes que customizam o grafico
		var opcoes = {

			title:'Aumentos por mês',
			height: 400,
			width: 800,
			legend: 'labeled',	
			isStacked: 'absolute',
			vAxis: {minValue: 0, gridlines: {color:'transparent'}},
			hAxis: { gridlines: { count: 0 } },
			bar: { groupWidth: '25%' }
		};

	//desenhando grafico
	var grafico = new google.visualization.ColumnChart(document.getElementById('graficoColunasEmpilhadas'));
			grafico.draw(tabela, opcoes);


//grafico de area
 var tabela = google.visualization.arrayToDataTable([
          ['Ano', 'Entradas', 'Saídas'],
          ['2013',  1000,      400],
          ['2014',  1170,      460],
          ['2015',  660,       1120],
          ['2016',  1030,      540]
        ]);

        var opcoes = {
        	height: 300,
        	width: 650,
          	title: 'Entradas e saídas anuais',
          	hAxis: {title: 'Ano',  titleTextStyle: {color: '#333'}},
          	vAxis: {minValue: 0}
        };

        var grafico = new google.visualization.AreaChart(document.getElementById('graficoArea'));
        grafico.draw(tabela, opcoes);


//grafico de area com gastos
var tabela = google.visualization.arrayToDataTable([
        ['Faculdade', 'Transporte', 'Lazer', 'Internet', 'Cartão de crédito',
         'Alimentação', { role: 'annotation' } ],
        ['2014', 10, 24, 20, 32, 18, ''],
        ['2015', 16, 22, 23, 30, 16, ''],
        ['2016', 28, 19, 29, 30, 12, ''],
        ['2017', 28, 19, 29, 30, 12, '']
      ]);


       var opcoes = {	
       		height: 300,
        	width: 650,
         	legend: {position: 'right', maxLines: 3},
          	vAxis: {
            		minValue: 0,
          	},
          	title: 'Gastos por categorias',
          	isStacked: true
        };

      var grafico = new google.visualization.AreaChart(document.getElementById("graficoAreaGastos"));
      grafico.draw(tabela, opcoes);


 //grafico de áreas empilhadas
 var tabela = google.visualization.arrayToDataTable([
        ['Semana','Conta cartão','Conta poupança','Conta salário','Conta corrente','Cartão de crédito'],
        [new Date('2012, 12, 16'),69,31,4,19,24],
        [new Date('2012, 12, 23'),64,25,3,18,19],
        [new Date('2012, 12, 30'),62,26,3,17,19],
        [new Date('2013, 01, 06'),79,32,4,19,25],
        [new Date('2013, 01, 13'),100,32,4,19,26],
        [new Date('2013, 01, 20'),81,33,4,20,26],
        [new Date('2013, 01, 27'),79,32,4,20,26],
        [new Date('2013, 02, 03'),80,32,4,19,26],
        [new Date('2013, 02, 10'),76,31,4,19,25],
        [new Date('2013, 02, 17'),79,33,4,20,26],
        [new Date('2013, 02, 24'),83,33,5,20,27],
        [new Date('2013, 03, 03'),82,33,4,20,27],
        [new Date('2013, 03, 10'),79,33,4,20,26],
        [new Date('2013, 03, 17'),77,33,4,20,27],
        [new Date('2013, 03, 24'),76,31,4,19,26],
        [new Date('2013, 03, 31'),75,31,4,19,25],
        [new Date('2013, 04, 07'),77,33,4,20,26],
        [new Date('2013, 04, 14'),81,33,4,20,27],
        [new Date('2013, 04, 21'),88,33,4,20,26],
        [new Date('2013, 04, 28'),75,30,4,19,25],
        [new Date('2013, 05, 05'),77,31,4,19,26],
        [new Date('2013, 05, 12'),76,32,5,19,26],
        [new Date('2013, 05, 19'),74,31,4,19,26],
        [new Date('2013, 05, 26'),73,31,4,19,26],
        [new Date('2013, 06, 02'),72,31,4,18,26],
        [new Date('2013, 06, 09'),73,31,4,18,25],
        [new Date('2013, 06, 16'),81,31,4,18,26],
        [new Date('2013, 06, 23'),80,31,5,18,26],
        [new Date('2013, 06, 30'),76,30,4,18,25],
        [new Date('2013, 07, 07'),75,30,4,19,26],
        [new Date('2013, 07, 14'),77,30,4,18,26],
        [new Date('2013, 07, 21'),74,30,4,18,26],
        [new Date('2013, 07, 28'),72,30,4,17,26],
        [new Date('2013, 08, 04'),71,29,4,18,26],
        [new Date('2013, 08, 11'),69,29,4,18,25],
        [new Date('2013, 08, 18'),71,29,4,18,25],
        [new Date('2013, 08, 25'),71,30,4,18,26],
        [new Date('2013, 09, 01'),71,29,4,18,25],
        [new Date('2013, 09, 08'),72,29,4,19,26],
        [new Date('2013, 09, 15'),72,29,4,19,25],
        [new Date('2013, 09, 22'),74,30,4,20,27],
        [new Date('2013, 09, 29'),72,29,4,20,25],
        [new Date('2013, 10, 06'),77,31,4,21,27],
        [new Date('2013, 10, 13'),92,30,4,20,26],
        [new Date('2013, 10, 20'),88,31,4,21,27],
        [new Date('2013, 10, 27'),79,29,4,20,27],
        [new Date('2013, 11, 03'),77,30,4,20,26],
        [new Date('2013, 11, 10'),79,30,4,20,28],
        [new Date('2013, 11, 17'),77,31,4,20,28],
        [new Date('2013, 11, 24'),74,30,4,20,26],
        [new Date('2013, 12, 01'),74,30,4,19,26],
        [new Date('2013, 12, 08'),73,29,4,19,27],
        [new Date('2013, 12, 15'),71,29,4,18,27],
        [new Date('2013, 12, 22'),66,23,3,17,20],
        [new Date('2013, 12, 29'),64,22,3,16,19],
        [new Date('2014, 01, 05'),71,28,4,18,25],
        [new Date('2014, 01, 12'),91,29,4,18,26],
        [new Date('2014, 01, 19'),85,30,4,19,27],
        [new Date('2014, 01, 26'),80,30,4,19,26],
        [new Date('2014, 02, 02'),75,29,4,18,26],
        [new Date('2014, 02, 09'),76,30,4,19,27],
        [new Date('2014, 02, 16'),78,30,4,19,28],
        [new Date('2014, 02, 23'),77,30,4,19,27],
        [new Date('2014, 03, 02'),75,31,4,19,27],
        [new Date('2014, 03, 09'),76,31,4,19,28],
        [new Date('2014, 03, 16'),77,31,4,19,27],
        [new Date('2014, 03, 23'),76,30,4,19,28],
        [new Date('2014, 03, 30'),74,29,4,19,27],
        [new Date('2014, 04, 06'),76,30,4,19,27],
        [new Date('2014, 04, 13'),78,29,4,18,27],
        [new Date('2014, 04, 20'),78,29,4,19,27],
        [new Date('2014, 04, 27'),76,27,4,18,25],
        [new Date('2014, 05, 04'),76,29,4,18,27],
        [new Date('2014, 05, 11'),74,29,4,18,27],
        [new Date('2014, 05, 18'),73,30,4,18,28],
        [new Date('2014, 05, 25'),72,29,4,18,26],
        [new Date('2014, 06, 01'),73,28,4,18,26],
        [new Date('2014, 06, 08'),70,27,4,18,25],
        [new Date('2014, 06, 15'),72,27,4,19,26],
        [new Date('2014, 06, 22'),70,28,4,19,26],
        [new Date('2014, 06, 29'),70,27,4,17,25],
        [new Date('2014, 07, 06'),70,28,4,17,26],
        [new Date('2014, 07, 13'),74,28,4,17,26],
        [new Date('2014, 07, 20'),76,27,4,17,26],
        [new Date('2014, 07, 27'),73,26,4,17,26],
        [new Date('2014, 08, 03'),73,27,4,17,26],
        [new Date('2014, 08, 10'),70,26,4,17,25],
        [new Date('2014, 08, 17'),72,27,4,18,26],
        [new Date('2014, 08, 24'),69,26,4,17,25],
        [new Date('2014, 08, 31'),69,27,4,18,25],
        [new Date('2014, 09, 07'),73,27,4,19,26],
        [new Date('2014, 09, 14'),73,27,4,20,26],
        [new Date('2014, 09, 21'),73,27,4,20,26],
        [new Date('2014, 09, 28'),70,27,4,18,25],
        [new Date('2014, 10, 05'),70,27,4,19,26],
        [new Date('2014, 10, 12'),76,28,4,19,27],
        [new Date('2014, 10, 19'),77,27,4,18,25],
        [new Date('2014, 10, 26'),79,27,4,19,27],
        [new Date('2014, 11, 02'),78,28,4,19,27],
        [new Date('2014, 11, 09'),78,27,4,19,27],
        [new Date('2014, 11, 16'),76,27,4,19,27],
        [new Date('2014, 11, 23'),69,27,4,19,25],
        [new Date('2014, 11, 30'),69,27,6,19,27],
        [new Date('2014, 12, 07'),69,27,5,19,27],
        [new Date('2014, 12, 14'),67,26,4,17,26],
        [new Date('2014, 12, 21'),60,21,3,15,19],
        [new Date('2014, 12, 28'),57,20,3,14,17],
        [new Date('2015, 01, 04'),65,25,4,16,24],
        [new Date('2015, 01, 11'),66,26,4,17,26],
        [new Date('2015, 01, 18'),70,27,4,18,26],
        [new Date('2015, 01, 25'),69,26,4,17,26],
        [new Date('2015, 02, 01'),71,27,4,18,27],
        [new Date('2015, 02, 08'),70,27,4,18,27],
        [new Date('2015, 02, 15'),68,26,4,17,26],
        [new Date('2015, 02, 22'),68,27,4,18,27],
        [new Date('2015, 03, 01'),68,27,4,18,27],
        [new Date('2015, 03, 08'),68,27,4,18,27],
        [new Date('2015, 03, 15'),67,27,4,18,27],
        [new Date('2015, 03, 22'),69,28,4,18,28],
        [new Date('2015, 03, 29'),65,26,4,17,27],
        [new Date('2015, 04, 05'),66,26,4,17,26],
        [new Date('2015, 04, 12'),73,27,4,18,27],
        [new Date('2015, 04, 19'),76,27,4,18,28],
        [new Date('2015, 04, 26'),68,25,4,17,26],
        [new Date('2015, 05, 03'),66,26,4,17,26],
        [new Date('2015, 05, 10'),66,26,4,17,27],
        [new Date('2015, 05, 17'),66,26,4,17,27],
        [new Date('2015, 05, 24'),63,26,4,17,26],
        [new Date('2015, 05, 31'),64,26,4,17,27],
        [new Date('2015, 06, 07'),64,26,4,16,27],
        [new Date('2015, 06, 14'),64,26,4,16,27],
        [new Date('2015, 06, 21'),62,26,4,16,27],
        [new Date('2015, 06, 28'),62,25,4,16,26],
        [new Date('2015, 07, 05'),61,25,4,16,27],
        [new Date('2015, 07, 12'),64,25,4,16,27],
        [new Date('2015, 07, 19'),63,24,4,16,27],
        [new Date('2015, 07, 26'),62,25,4,16,27],
        [new Date('2015, 08, 02'),60,24,4,17,26],
        [new Date('2015, 08, 09'),59,23,4,16,26],
        [new Date('2015, 08, 16'),61,24,4,16,26],
        [new Date('2015, 08, 23'),60,24,4,17,26],
        [new Date('2015, 08, 30'),62,24,4,17,26],
        [new Date('2015, 09, 06'),62,25,4,18,26],
        [new Date('2015, 09, 13'),61,25,4,18,26],
        [new Date('2015, 09, 20'),62,24,4,18,27],
        [new Date('2015, 09, 27'),61,25,4,18,26],
        [new Date('2015, 10, 04'),62,25,4,19,27],
        [new Date('2015, 10, 11'),62,25,4,19,27],
        [new Date('2015, 10, 18'),63,25,4,18,27],
        [new Date('2015, 10, 25'),63,25,4,18,27],
        [new Date('2015, 11, 01'),61,25,4,18,28],
        [new Date('2015, 11, 08'),59,24,4,17,26],
        [new Date('2015, 11, 15'),61,25,4,18,27],
        [new Date('2015, 11, 22'),57,25,3,17,26],
        [new Date('2015, 11, 29'),59,25,4,18,28],
        [new Date('2015, 12, 06'),58,25,4,17,28],
        [new Date('2015, 12, 13'),56,25,4,16,27],
        [new Date('2015, 12, 20'),49,21,3,14,22],
        [new Date('2015, 12, 27'),45,19,3,13,19],
        [new Date('2016, 01, 03'),48,24,4,15,25],
        [new Date('2016, 01, 10'),50,25,4,15,27],
        [new Date('2016, 01, 17'),54,26,4,16,27],
        [new Date('2016, 01, 24'),54,26,4,16,28],
        [new Date('2016, 01, 31'),54,27,4,16,28],
        [new Date('2016, 02, 07'),53,26,4,16,27],
        [new Date('2016, 02, 14'),54,26,4,16,28],
        [new Date('2016, 02, 21'),54,26,4,17,29],
        [new Date('2016, 02, 28'),55,27,4,17,29],
        [new Date('2016, 03, 06'),55,26,4,17,29],
        [new Date('2016, 03, 13'),55,27,4,16,29],
        [new Date('2016, 03, 20'),51,25,4,15,27],
        [new Date('2016, 03, 27'),54,25,4,16,28],
        [new Date('2016, 04, 03'),54,26,4,16,28],
        [new Date('2016, 04, 10'),54,26,4,16,28],
        [new Date('2016, 04, 17'),54,26,4,16,29],
        [new Date('2016, 04, 24'),54,25,4,16,28],
        [new Date('2016, 05, 01'),51,24,4,15,26],
        [new Date('2016, 05, 08'),52,26,4,16,28],
        [new Date('2016, 05, 15'),52,26,4,16,29],
        [new Date('2016, 05, 22'),51,26,4,15,29],
        [new Date('2016, 05, 29'),51,25,4,15,28],
        [new Date('2016, 06, 05'),50,25,4,15,29],
        [new Date('2016, 06, 12'),49,25,4,14,28],
        [new Date('2016, 06, 19'),50,24,4,15,28],
        [new Date('2016, 06, 26'),49,24,4,14,28],
        [new Date('2016, 07, 03'),46,22,4,14,26],
        [new Date('2016, 07, 10'),47,22,4,15,26],
        [new Date('2016, 07, 17'),48,23,4,15,27],
        [new Date('2016, 07, 24'),48,22,4,15,27],
        [new Date('2016, 07, 31'),47,22,4,15,27],
        [new Date('2016, 08, 07'),45,22,4,14,26],
        [new Date('2016, 08, 14'),43,20,3,14,23],
        [new Date('2016, 08, 21'),46,22,4,15,27],
        [new Date('2016, 08, 28'),46,22,4,15,26],
        [new Date('2016, 09, 04'),46,22,4,16,26],
        [new Date('2016, 09, 11'),48,22,4,16,26],
        [new Date('2016, 09, 18'),50,23,4,16,27],
        [new Date('2016, 09, 25'),49,22,4,17,27],
        [new Date('2016, 10, 02'),48,22,4,17,27],
        [new Date('2016, 10, 09'),47,22,4,16,27],
        [new Date('2016, 10, 16'),51,23,4,17,28],
        [new Date('2016, 10, 23'),50,24,4,16,29],
        [new Date('2016, 10, 30'),49,22,4,16,28],
        [new Date('2016, 11, 06'),49,23,4,17,29],
        [new Date('2016, 11, 13'),50,24,4,17,30],
        [new Date('2016, 11, 20'),47,24,4,16,29],
        [new Date('2016, 11, 27'),49,23,4,16,30],
        [new Date('2016, 12, 04'),47,23,4,16,29],
        [new Date('2016, 12, 11'),46,23,4,15,29],
        [new Date('2016, 12, 18'),43,22,4,14,28],
        [new Date('2016, 12, 25'),37,18,3,13,22],
        [new Date('2017, 01, 01'),42,20,3,13,25],
        [new Date('2017, 01, 08'),45,23,4,14,29],
        [new Date('2017, 01, 15'),46,23,4,15,29],
        [new Date('2017, 01, 22'),47,23,4,15,28],
        [new Date('2017, 01, 29'),47,23,4,15,29],
        [new Date('2017, 02, 05'),48,24,4,15,31],
        [new Date('2017, 02, 12'),48,24,4,16,31],
        [new Date('2017, 02, 19'),50,24,4,16,32],
        [new Date('2017, 02, 26'),49,25,4,16,32],
        [new Date('2017, 03, 05'),50,25,4,15,32],
        [new Date('2017, 03, 12'),51,24,4,15,32],
        [new Date('2017, 03, 19'),51,25,4,16,32],
        [new Date('2017, 03, 26'),50,24,4,16,33],
        [new Date('2017, 04, 02'),49,24,4,16,32],
        [new Date('2017, 04, 09'),46,23,4,15,30],
        [new Date('2017, 04, 16'),47,23,4,15,30],
        [new Date('2017, 04, 23'),49,24,4,15,31],
        [new Date('2017, 04, 30'),44,21,3,15,28],
        [new Date('2017, 05, 07'),47,23,4,15,31],
        [new Date('2017, 05, 14'),45,22,4,14,30],
        [new Date('2017, 05, 21'),44,21,4,14,30],
        [new Date('2017, 05, 28'),43,21,4,14,28],
        [new Date('2017, 06, 04'),41,21,4,13,29],
        [new Date('2017, 06, 11'),43,21,4,13,29],
        [new Date('2017, 06, 18'),42,21,4,13,30],
        [new Date('2017, 06, 25'),41,20,4,13,29],
        [new Date('2017, 07, 02'),41,20,3,13,28],
        [new Date('2017, 07, 09'),42,20,4,13,29],
        [new Date('2017, 07, 16'),43,20,4,13,30],
        [new Date('2017, 07, 23'),43,21,4,13,30],
        [new Date('2017, 07, 30'),42,20,4,13,30],
        [new Date('2017, 08, 06'),39,19,3,13,28],
        [new Date('2017, 08, 13'),39,19,3,13,27],
        [new Date('2017, 08, 20'),40,20,3,13,28],
        [new Date('2017, 08, 27'),41,19,3,13,28],
        [new Date('2017, 09, 03'),42,20,3,14,28],
        [new Date('2017, 09, 10'),45,20,3,15,30],
        [new Date('2017, 09, 17'),45,20,3,16,29],
        [new Date('2017, 09, 24'),45,20,3,15,29],
        [new Date('2017, 10, 01'),43,20,3,15,28],
        [new Date('2017, 10, 08'),45,21,4,16,30],
        [new Date('2017, 10, 15'),43,20,4,15,29],
        [new Date('2017, 10, 22'),45,21,4,15,30],
        [new Date('2017, 10, 29'),44,20,3,15,29],
        [new Date('2017, 11, 05'),46,21,3,16,31],
        [new Date('2017, 11, 12'),46,21,4,16,31],
        [new Date('2017, 11, 19'),42,20,3,15,29],
        [new Date('2017, 11, 26'),44,21,3,15,30],
        [new Date('2017, 12, 03'),44,21,3,15,31],
        [new Date('2017, 12, 10'),38,18,3,14,26]
      ]);


       var opcoes = {
          isStacked: 'relative',
          height: 300,
          width: 650,
          legend: {position: 'right', maxLines: 3},
          //vAxis: {
            //minValue: 0,
            //format: 'none'
          //},
          vAxis:{
          	minValue: 0},
           hAxis:{format: 'yyyy'},
          title: 'Receitas anuais de contas por categorias indo até 100%'
        };

      var grafico = new google.visualization.AreaChart(document.getElementById("graficoAreaLinguagem"));
      grafico.draw(tabela, opcoes);

    //grafico com colunas e "selecao" de periodo
    //grafico de dispersao
	    /*conforme o aumento de credito de uma pessoa, aumento do valor gasto
	    limite de crédito x valor gasto*/
    //grafico de bolhas
    	/*limite de crédito x valor gasto x numero de usuarios x cidade*/
    //grafico com duas linhas curvas e depois dois eixos
    	/*comparar numero de convites enviados com quantidade de adesão - quantos usuarios aderiram*/
    
    //spreadsheets
  
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/13epzrwlE6qfX8piGd2545Evztpl_S0eGvHDp4GhHUWM/gviz/tq?&range=A1:B7');
  query.send(handleQueryResponse);
	

function handleQueryResponse(response) {
  var tabela = response.getDataTable();
  var opcoes = {title: 'Grafico populado por tabela do google charts', vAxis:{gridlines:{color:'transparent'}}, width:900, height:500, legend: 'none'};
  var grafico = new google.visualization.ColumnChart(document.getElementById('graficoPlanilha'));
  grafico.draw(tabela, opcoes);
	}


//histograma
        var tabela = google.visualization.arrayToDataTable([
          ['cliente', 'idade'],
          ['Andre Da Costa', 22],
          ['Eduarda Boaron', 30],
          ['Giovanna Pelinski', 28],
          ['José Hugo Silva', 29],
          ['Maíra Bortoluzzi', 26],
          ['Fabio Vinicius Barth', 36],
          ['Larissa Dill Gazzola', 61],
          ['Patryck Garcia Prado', 35],
          ['Emilly Almeida', 58],
          ['Arthur Rodrigues Caetano', 27],
          ['Amanda Franco', 49],
          ['Gabriela Boiago Dias', 27],
          ['Matheus Prince', 32],
          ['Alexandre Toshio', 34],
          ['Gabriel Alves Pinheiro', 55],
          ['Vitor Henrique Soares', 21],
          ['Rafaela Cristina Pereira', 39],
          ['Anna Paula Lopes', 56],
          ['Daphne Zilioto', 43],
          ['Flávio Germano', 51],
          ['Ingrid da Costa', 62],
          ['João Elias Oliveira', 41],
          ['Lucas Gomes Viana', 45],
          ['Matheus Fadel', 23],
          ['Milena Zequim', 30],
          ['Tiago João Kavleski', 52],
          ['Sabrina Conceição Silva', 35],
          ['Thomaz Ziemberg', 18]]);

        var opcoes = {
          title: 'Distribuição de clientes por idade',
          legend: { position: 'none' },
          vAxis:{gridlines:{color:'transparent'}},
          width: 900,
          height: 500
        };

        var grafico = new google.visualization.Histogram(document.getElementById('histograma'));
        grafico.draw(tabela, opcoes);
      

    	//dashboard com controles
        var tabela = google.visualization.arrayToDataTable([
              	['Mês',   'Valores'],
                ['Jan',    80.66 ],
                ['Fev',    79.84 ],
                ['Mar',    78.6  ],
                ['Abr',    72.73 ],
                ['Mai',    80.05 ],
                ['Jun',    72.49 ],
                ['Jul',    68.09 ],
                ['Ago',    81.55 ],
                ['Set',    68.6  ],
                ['Out',    78.09 ],
                ['Nov',    78.09 ],
                ['Dez',    78.09 ]
        ]);

        //criando o dashboard
        var dashboard = new google.visualization.Dashboard(
            document.getElementById('dashboard'));

        //criando o filtro com seleção e passando as opções
        var filtro = new google.visualization.ControlWrapper({
          controlType: 'NumberRangeFilter',
          containerId: 'filtro',
          options: {
            'filterColumnLabel': 'Valores'
          }
        });

        //criando o gráfico de colunas, passando as opcoes
        var graficoColunas = new google.visualization.ChartWrapper({
          chartType: 'ColumnChart',
          containerId: 'graficoDashboard',
          options: {
            width: 900,
            height: 600,
            legend: 'right',
		title: 'Valores de crédito por mês'
          }
        });


	//estabelecendo as dependências, passando os parâmetros para mostrar que o grafico de colunas
	//segue o que foi estabelecido pelo filtro
        dashboard.bind(filtro, graficoColunas);

        //funcao que desenha o dashboard
        dashboard.draw(tabela);

      



      //filtro com colunas tipo 2
	var controle = new google.visualization.ControlWrapper({
	      controlType: 'ChartRangeFilter',
	      containerId: 'amplitudeDoFiltro',
	      options: {
		//filtrar pelo eixo da data
		'filterColumnIndex': 0,
		ui: {
		  chartType: 'LineChart',
		  chartOption: {
		    chartArea: {width: '90%'},
		    hAxis: {baselineColor: 'none'}
		  },
		  //mostrar os valores
		  chartView: {
		    columns: [0, 3]
		  },
		  // 1 dia em milisegundos = 24 * 60 * 60 * 1000 = 86,400,000
		  minRangeSize: 86400000
		}
	      },
	      // limite inicial: 2012-02-09 to 2012-03-20.
	      state: {range: {start: new Date(2012, 1, 9), end: new Date(2012, 2, 20)}}
	    });

	    var grafico = new google.visualization.ChartWrapper({
	      chartType: 'ColumnChart',
	      containerId: 'graficoDoFiltro',
	      options: {
		//usar a mesma largura do grafico para o controle, alinhando os dois
		chartArea: {height: '80%', width: '90%'},
		hAxis: {slantedText: false},
		vAxis: {viewWindow: {min: 0, max: 2000}},
		legend: {position: 'none'},
		title: 'Selecionar o mês para ver o balanço (precisa ainda ser melhorado)',
		width: 915,
		height: 300
	      },
	     
	      //converter a primeira coluna de data para string
	      view: {
		columns: [
		  {
		    calc: function(tabela, rowIndex) {
		      return tabela.getFormattedValue(rowIndex, 0);
		    },
		    type: 'string'
		  }, 1, 2, 3, 4]
	      }
	    });

	    var tabela = new google.visualization.DataTable();
	    tabela.addColumn('date', 'Date');
	    tabela.addColumn('number', 'Saídas');
	    tabela.addColumn('number', 'Entradas');
	    tabela.addColumn('number', 'Baixa');
	    tabela.addColumn('number', 'Crescimento');

	    //criando dados randômicos e adicionando na tabela
	    var entrada, saída = 300;
	    var baixa, crescimento;
	    for (var dia = 1; dia < 121; ++dia) {
	      var mudança = (Math.sin(dia / 2.5 + Math.PI) + Math.sin(dia / 3) - Math.cos(dia * 0.7)) * 150;
	      mudança = mudança >= 0 ? mudança + 10 : mudança - 10;
	      entrada = saída;
	      saída = Math.max(50, entrada + mudança);
	      baixa = Math.min(entrada, saída) - (Math.cos(dia * 1.7) + 1) * 15;
	      baixa = Math.max(0, baixa);
	      crescimento = Math.max(entrada, saída) + (Math.cos(dia * 1.3) + 1) * 15;
	      var data = new Date(2012, 0 ,dia);
	      tabela.addRow([data, Math.round(baixa), Math.round(entrada), Math.round(saída), Math.round(crescimento)]);
	    }

	    var dashboard = new google.visualization.Dashboard(
	      document.getElementById('dashboardDoFiltro'));
	    	dashboard.bind(controle, grafico);
	   	dashboard.draw(tabela);
	  

//grafico de bolhas
      var tabela = google.visualization.arrayToDataTable([
	['Mês',   'Valor',       'Rendimento', ''],
        ['Jan',    80.66,              1.67, ''],
        ['Fev',    79.84,              1.36, ''],
        ['Mar',    78.6,               1.84, ''],
        ['Abr',    72.73,              2.78, ''],
        ['Mai',    80.05,              2, ''],
        ['Jun',    72.49,              1.7, ''],
        ['Jul',    68.09,              4.77, ''],
        ['Ago',    81.55,              2.96, ''],
        ['Set',    68.6,               1.54, ''],
        ['Out',    78.09,              2.05, ''],
        ['Nov',    78.09,              2.05, ''],
        ['Dez',    78.09,              2.05, '']
      ]);

      var opcoes = {
        title: 'Correlação entre mês, rendimento ' +
               'valor investido (2017)',
        hAxis: {title: 'Valor investido'},
        vAxis: {title: 'Percentual de crescimento'},
        bubble: {textStyle: {fontSize: 11}},
	width: 900,
	height: 500
      };

      var grafico = new google.visualization.BubbleChart(document.getElementById('graficoBolha'));
      grafico.draw(tabela, opcoes);
   
 

};
