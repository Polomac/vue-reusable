## @polomac/p-table

#### Description
Reusable table component for Vue
#### Dependecies
	@polomac/p-table-row

#### Instalation
	npm i @polomac/p-table 

#### Usage:
__import PTable in component as usual:__

	import  PTable  from  '@polomac/p-table/PTable';
	.
	.
	.
	components: {
		PTable,
	}
#### Props
- __header__ 
	Array of String values representing table header cells.

- __items__
	Array whose elements representing the row of the table, each.
	Elements of "items" arrays are also an arrays of string values. Each one corresponds with one table cell of the appropriate row.
	E.g.:
```
items: [
	[ 'Yair Lamb', 'yair.lamb@email.com', 'orange' ],

	[ 'Leonardo Payne', 'leonardo.payne@email.com', 'blue' ],

	[ 'Carl Henson', 'carl.henson@email.com', 'brown' ],

	[ 'Jensen Combs', 'jensen.combs@email.com', 'green' ],

	[ 'Amiah Burton', 'amiah.burton@email.com', 'white' ],

	[ 'Yaretzi Mayo', 'yaretzi.mayo@email.com', 'red' ],

	[ 'Kamren Huffman', 'kamren.huffman@email.com', 'black' ]
],
```
- __headerColor__
	Text color of header cells
- __headerBackground__
	Background of header cells
- __headerFontSize__
	Font size of header cells
- __color__
	Text color of table row
- __background__
	Background of table row 
- __fontSize__
	Font size of table body cells