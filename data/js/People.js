var People = function () {
	this.MW = 64;
	this.MH = 64;

	this.position = {
		x: 64,
		y: 64
	};

	this.teacherPos = {
		x: 10,
		y: 10
	};


	this.load = function () {
		this.teacher = new Framework.Sprite(define.imagePath + 'teacher_left.png');
	};

	this.initialize = function () {

	};

	this.update = function () {

	};

	this.draw = function (ctx) {

		var picPosition = {
			x: this.position.x + (this.MW * 1) * this.teacherPos.x + this.MW / 2,
			y: this.position.y + (this.MH * 1) * this.teacherPos.y + this.MH / 2
		}

		this.teacher.position = picPosition;
		this.teacher.draw(ctx)

	};

};