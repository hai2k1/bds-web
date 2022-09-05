<select name="city" id="city">
    @foreach ($options['value'] as $key => $value )
        <option value="{{$key}}">{{$value}}</option>
    @endforeach
</select>
<br>
<h5>Quận / Huyện</h5>
<select name="district" id="district">
</select>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
    $('#city').on('change', function () {
    var url = "{{route('street.getstreet')}}";
        $.get(url,$("#city" ).val())
        .done(function( data ) {
            let text = "";
            const entries = Object.entries(data);
            entries.forEach(element => {
                console.log(element);
                text +=`
                        <option value="${element[0]}">${element[1]}</option>
                        `; 
            });
            document.getElementById("district").innerHTML = text;
        });   
    });   
</script>