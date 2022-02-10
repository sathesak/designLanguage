<section>
    <div class="container">

        <h2>
            Dropdown
        </h2>

        <div data-ele="dropdown">
            <label for="ddFld">
                This is dropdown field <br>
                <input type="text" readonly="readonly" class="txtFld txtDDFld" id="ddFld" data-dd="field">
            </label>

            <!-- you can add dropUp class -->

            <div class="ddList" data-dd="list">

                <ul class="dispNone">
                    <li>
                        <input type="radio" name="ddList" id="item1" data-dd="item">
                        <label for="item1"><span></span>This is 1</label>    
                    </li>

                    <li>
                        <input type="radio" name="ddList" id="item1a" data-dd="item">
                        <label for="item1a"><span></span>This is 1A</label>    
                    </li>

                    <li>
                        <input type="radio" name="ddList" id="item2" data-dd="item">
                        <label for="item2"><span></span>This is 2 this is more and more text goes here</label>    
                    </li>
                        
                </ul>

            </div>
            
        </div>
        
    </div>     
</section>