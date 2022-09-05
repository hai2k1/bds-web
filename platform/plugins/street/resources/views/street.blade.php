@isset($district)
<select name="district" id="district">
    @foreach ($district as $key => $value )
        <option value="{{$key}}">{{$value}}</option>
    @endforeach
@endisset 
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
    $("#district").html("Hello <b>world!</b>");
</script>