<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.min.css">
    <title>Design system</title>
</head>
<body>
    

    <header>

    </header>

    <main>
        <h1>
            This is a design language
        </h1>

        <?php include 'mod/_accordion.php';?>
        <?php include 'mod/_button.php';?>
        <?php include 'mod/_textinput.php';?>
        <?php include 'mod/_textarea.php';?>
        <?php include 'mod/_dropdown.php';?>
        <?php include 'mod/_checkbox.php';?>
        <?php include 'mod/_radiobutton.php';?>
        <?php include 'mod/_option.php';?>
        <?php include 'mod/_link.php';?>

        <?php include 'mod/_backtotop.php';?>






        



        

  

        



        <section id="jsTest">
            JS test executed?

        </section>


    </main>

    <footer>

    </footer>

    <script data-main="js/app.min" src="js/require.min.js"></script>

    <!--
    <script>
        alert('before require is loaded');
        require(['app'], function(){
            alert('after require is loaded');
            document.addEventListener('DOMContentLoaded', () => {



            var container = document.querySelector('#jsTest');
            var newEl = document.createElement('div');
            newEl.innerHTML = "This is a new HTML";

            container.appendChild(newEl);


            var dropdown = function(){
                const ddItm = document.querySelectorAll('[data-dd="item"]');

                ddItm.forEach((e)=>{
                    const ddEle = e.closest('[data-ele="dropdown"]');
                    const ddLst = ddEle.querySelector('[data-dd="list"] > ul');
                    const ddFld = ddEle.querySelector('[data-dd="field"]');

                    ddFld.addEventListener('focus', () =>{
                        ddLst.classList.remove('dispNone');
                    });

                    e.addEventListener('click', ()=>{
                        var ddLbl = e.nextElementSibling.innerHTML;

                        ddLbl = ddLbl.replace(/<\/?span[^>]*>/g,"");
                        ddFld.value = ddLbl;

                        ddLst.classList.add('dispNone');
                    });

                });

            }

            dropdown();

            var accordion = function(){
                const accBtn = document.querySelectorAll('[data-acc="button"]');
                
                console.log(accBtn);
            }

            });

        });

        /*
       
        */

                    
    </script>
        -->


        
     


</body>
</html>