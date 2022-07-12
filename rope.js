class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2,
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		//ESCREVA O CÓDIGO CORRETO PARA RENDER UMA LINHA ENTRE OS DOIS CORPOS
        line (pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y);
		
	}

}