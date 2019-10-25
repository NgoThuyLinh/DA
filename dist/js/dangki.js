
$(document).ready(function(){
    $("btn-dutoankinhphi").click(function(){
        $("#dutoankinhphi").show();
    });
    $(".click-panel-heading").click(function(){
        var $this = $(this);
        console.log($this)
        if(!$this.hasClass('panel-collapsed')) {
           $('.panel-body').hide();
            $this.addClass('panel-collapsed');
            $this.find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        } else {
            $('.panel-body').show();
            $this.removeClass('panel-collapsed');
            $this.find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }
    });

    // Menu-function click row
    $(function() {
        var id;
        console.log(id)
        $.contextMenu({
            selector: '.context-menu-one',
            callback: function(key, options) {
                id= $(this).attr("id");
                console.log(id)
                if(key=="edit"){

                }else if(key=="copy"){
                    // $.ajax({
                    //     processData: false,
                    //     contentType: false,
                    //     url: '?mod=category&act=getListCategory',
                    //     type: 'get',
                    //     success : function(data){
                    //         var array = JSON.parse(data);
                    //         $.each(JSON.parse(array.cates), function(key,value){
                    //             console.log(value.name);
                    //         })
                    //     },
                    // });

                }else if(key=="print"){
                    window.print();
                }else if(key=="delete"){

                }
            },
            items: {
                "edit": {name: "Sửa phiếu(F7)", icon: "edit"},
               "copy": {name: "Sao chép phiếu(F8)", icon: "copy"},
                "print": {name: "In phiếu(F9)", icon: "fa-print"},
                "delete": {name: "Hủy phiếu(F10)", icon: "delete"},
                "sep1": "---------",
                "quit": {name: "Quit", icon: function(){
                    return 'context-menu-icon context-menu-icon-quit';
                }}
            }
        });

        $('.context-menu-one').mousedown(function(e){
            id= $(this).attr("id");
            console.log("click"+id)
        });
        // if (id!="undefined" || id!=null) {
        //     document.addEventListener("keyup", function (e) {
        //         if (e.code=="F7") {
        //             alert("F7");
        //         } else if (e.code=="F8") {
        //             alert("F8");
        //         }else if (e.code=="F10") {
        //             alert("F10");
        //         }else if (e.code=="F9") {
        //             window.print();
        //             id=null;
        //         }else
        //             alert(e.code+"/"+e.key+"/"+id);
        //     })
        // }

    });
});