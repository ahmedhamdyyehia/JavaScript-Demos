
        var URLData = location.search.split("&");
        var _Data = [];
        for (var i = 0; i < URLData.length; i++) {
            _Data.push(URLData[i].split("=")[1] + " ");
        }
        console.log(_Data);
        document.write(`
        <div style="background-color: lightgreen; color:black;text-align: center;">
        <p>
            Welcome 
            <span style="display: inline-block;">${_Data[0]}</span>
            <span style="display: inline-block;">${_Data[1]}</span>
        </p>

    </div>
        `);