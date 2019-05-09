class CourseManager {
    constructor()
    {
		this.availableCourse = ["國文", "計概", "程式設計", "OOP", "大學入門"];
        this.course = [];
		this.course.push(new Course("國文", "?"));
		this.course.push(new Course("國文", "?"));
		this.course.push(new Course("國文", "?"));
		this.course.push(new Course("計概", "?"));
		this.course.push(new Course("國文", "?"));
		this.course.push(new Course("國文", "?"));
		
		console.log(this.course);
		
		this.RegisterEvent();
    }
	
	//清空課表
	ClearAll()
	{
		this.course = [];
	}
 
	//顯示課表
	ShowCurriculum()
	{
		let self = this;
		
		let html = "" +
		`<div class="row">
            <div class="col-md-9">
                <table id="courseTable" class="table table-borderless text-light">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>時間</th>
                            <th>課程名稱</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>`;
			
		let blackScreen = document.getElementById('blackScreen');
		blackScreen.style.display = "block";

		let favDialog = document.getElementById('favDialog');
		favDialog.style.display = "block";
		
		$(function () {
			let _course_html = "";
			let _counter = 0;
			
			for(let _course of self.course)
			{
				_course_html +=
				`<tr>
					<td>${self.GetChineseNumber(_counter + 1)}</td>
					<td>${(_counter + 8)}:10</td>
					<td>
						${self.GenearateCourseDropDown(_course)}
					</td>
				</tr>`;
				
				_counter++;
			}
			
			$("#courseTable tbody").html(_course_html);
			
			//指定課表寬度
			$("#favDialog").css("width", "690px");
			
			//修改標題
			$(".windowTitle").text("課表");
		})
		favDialog.getElementsByClassName("content")[0].innerHTML = html;
	}
	
	GenearateCourseDropDown(select = null)
	{
		let _html = "";
		let _option = "";
		
		for(let _course of this.availableCourse)
		{
			let _isSelected = "";
			if(_course == select.name)
			{
				_isSelected = " selected";
			}
			_option += `<option${_isSelected}>${_course}</option>`;
		}
		_html = `<select class="coruse-select">${_option}</select>`;
		
		return _html;
	}
	
	GetChineseNumber(number)
	{
		let chineseNumber = ["一", "二", "三", "四", "五", "六", "七", "八"];
		return chineseNumber[number-1];
	}
	
	RegisterEvent()
	{
		let self = this;
		$(document).on("change", ".coruse-select", function(){
			self.ClearAll();
					
			//重新加到課表裡面
			$(".coruse-select").each(function(i, e){
				//console.log($(e).val())
				self.course.push(new Course($(e).val(), "?"));
			})
		});
	}
}