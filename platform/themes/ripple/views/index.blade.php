@php Theme::layout('no-sidebar'); @endphp

<div class="container">
    <form action="{{route('public.getpost')}}" method="post" enctype="multipart/form-data">
        @csrf
        <select id="select-state" name="city" class="form-control" placeholder="Lựa chọn Tỉnh / thành phố">
            <option value="">Thành Phố</option>
        </select>
        <select name="district" id="district" class="form-control" placeholder="Lựa chọn Quận/ Huyện">
            <option value="">Quận/ Huyện</option>
        </select>
        <select name="street" id="street" class="form-control" placeholder="Lựa chọn Phường / Xã">
            <option value="">Phường / Xã</option>
        </select>
        <input type="text" name="address" id="address" class="form-control" placeholder="Nhập địa chỉ">
        <input type="text" name="status" id="status" class="form-control" placeholder="Trạng thái">
        {{-- <input type="text" name="address" id="address" class="form-control" placeholder="nhập địa chỉ">
        <input type="text" name="address" id="address" class="form-control" placeholder="nhập địa chỉ">
        <input type="text" name="address" id="address" class="form-control" placeholder="nhập địa chỉ"> --}}
        <input type="file" class="form-control" name="image" id="image">
        <input type="text" name="content" id="content" class="form-control" placeholder="Nhập nội dung">
        <input type="checkbox" name="is_featured" id="is_featured" > Nổi bật ?
        <textarea name="description" class="form-control" id="description" cols="30" rows="10" placeholder="Chi tiết"></textarea>
        <input type="submit" class="form-control" value="Submit">
    </form>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
    $('#select-state').click(function() {
        var url = "{{route('city.getCity')}}";
        $.get(url)
        .done(function( data ) {
            let text = "";
            data.forEach(element => {
                text +=`
                        <option value="${element.code}">${element.name}</option>
                        `; 
            });
            document.getElementById("select-state").innerHTML = text;
        });
    });
    $('#select-state').on('change', function () {
    var url = "{{route('street.getstreet')}}";
        $.get(url,$("#select-state" ).val())
        .done(function( data ) {
            let text = "";
            const entries = Object.entries(data);
            entries.forEach(element => {
                text +=`
                        <option value="${element[0]}">${element[1]}</option>
                        `; 
            });
            document.getElementById("district").innerHTML = text;
        });   
    });
    $('#district').on('change', function () {
    var url = "{{route('street.getstreet2')}}";
        $.get(url,$("#district" ).val())
        .done(function( data ) {
            let text = "";
            const entries = Object.entries(data);
            entries.forEach(element => {
                text +=`
                        <option value="${element[0]}">${element[1]}</option>
                        `; 
            });
            document.getElementById("street").innerHTML = text;
        });   
    });
</script>
