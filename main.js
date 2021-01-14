/**
 * Chương trình: Bài tập tổng hợp buổi 7_8
 * Người tạo: Lê Văn Tài
 * Ngày tạo: 08/01/2021
 * Vesion: 1.0
 */
// Tạo hàm Helper
function getEle(ele) {
    return document.getElementById(ele);
}
// Viêt sự kiện cho nút Thêm Số( Lấy giá trị của người dùng thêm vào mảng)
var mangSoNguyen = [];
var hienThi = "Mảng hiện tại là: ";
getEle("btnThemSo").addEventListener("click", function () {
    var laySoNguyen = parseInt(getEle("txtSoNguyen").value);
    mangSoNguyen.push(laySoNguyen);
    hienThi += laySoNguyen + "  ";
    getEle("mangHienTai").innerHTML = hienThi;
})
// Viết sự kiện cho nút Tính tổng các số dương
getEle("btnTinhTongDuong").addEventListener("click", function () {
    var tongDuong = 0;
    if (mangSoNguyen.length > 0) {
        for (var i = 0; i < mangSoNguyen.length; i++) {
            if (mangSoNguyen[i] > 0) {
                tongDuong += mangSoNguyen[i];
            }

        }
        getEle("spanTongDuong").innerHTML = "Tổng các số dương là: " + tongDuong;
    } else {
        getEle("spanTongDuong").innerHTML = "Vui lòng nhập số nguyên vào mảng";
    }

})
// Viết sự kiện cho nút Đếm số dương
getEle("btnDemSoDuong").addEventListener("click", function () {
    var dem = 0;
    for (var i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] > 0) {
            dem++;
        }
    }
    if (dem > 0) {
        getEle("spanDemSoDuong").innerHTML = "Tổng số các chữ số dương là: " + dem;
    } else {
        getEle("spanDemSoDuong").innerHTML = "Mảng không có số dương  ";
    }
})
// Viết sự kiện cho nút Tìm số nhỏ nhất
getEle("btnTimSoNhoNhat").addEventListener("click", function () {
    var min = mangSoNguyen[0];
    for (var i = 1; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] < min) {
            min = mangSoNguyen[i];
        }
    }
    getEle("spanTimSoNhoNhat").innerHTML = "Số nhỏ nhất trong mảng là: " + min;

})
// Viết sự kiện cho nút Tìm số dương nhỏ nhất
getEle("btnTimSoDuongNhoNhat").addEventListener("click", function () {
    var mangSoDuong = [];
    for (var i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] > 0) {
            mangSoDuong.push(mangSoNguyen[i]);
        }
    }
    if (mangSoDuong.length == 0) {
        getEle("spanTimSoDuongNhoNhat").innerHTML = "Mảng không có số dương ";
    } else {
        var min = mangSoDuong[0];
        for (var i = 1; i < mangSoDuong.length; i++) {
            if (mangSoDuong[i] < min) {
                min = mangSoDuong[i];
            }
        }
        getEle("spanTimSoDuongNhoNhat").innerHTML = "Số dương nhỏ nhất trong mảng là: " + min;
    }
})
// Viết sự kiện cho nút Tìm số chẵn cuối cùng
getEle("btnTimSoChanCuoiCung").addEventListener("click", function () {
    var soChanCuoiCung = -1;
    for (var i = mangSoNguyen.length - 1; i >= 0; i--) {
        if (mangSoNguyen[i] % 2 === 0) {
            soChanCuoiCung = mangSoNguyen[i];
            break;
        }
    }
    getEle("spanTimSoChanCuoiCung").innerHTML = "Số chẵn cuối cùng trong mảng là: " + soChanCuoiCung;
})
// Viết sự kiện cho nút Đổi chỗ 2 giá trị
getEle("btnDoiCho").addEventListener("click", function () {
    getEle("divNhapSo").className = "form-group doiChoGiaTri d-block";

})
getEle("btnDoiCho2").addEventListener("click", function () {
    // getEle("divNhapSo").className = "form-group doiChoGiaTri d-block";
    var x = getEle("viTri1").value;
    var y = getEle("viTri2").value;
    for (var i = 0; i < mangSoNguyen.length; i++) {
        if (i == x) {
            var temp = mangSoNguyen[x];
            mangSoNguyen[x] = mangSoNguyen[y];
            mangSoNguyen[y] = temp;

        }

    }

    getEle("spanDoiCho").innerHTML = "Mảng sau khi hoán đổi là: " + mangSoNguyen.join("  ");
})
// Viết sự kiện cho nút Sắp xếp mảng tăng dần
getEle("btnSapXepTang").addEventListener("click", function () {
    for (var i = 0; i < mangSoNguyen.length - 1; i++) {
        for (var j = i + 1; j < mangSoNguyen.length; j++) {
            if (mangSoNguyen[i] > mangSoNguyen[j]) {
                var temp = mangSoNguyen[i];
                mangSoNguyen[i] = mangSoNguyen[j];
                mangSoNguyen[j] = temp;
            }

        }

    }
    getEle("spanSapXepTang").innerHTML = "Mảng sắp xếp tăng là: " + mangSoNguyen.join("  ");
})
// Viết sự kiện cho nút Tìm số nguyên tố đầu tiên
function laNguyenTo(n) {
    var flag = true;
    if (n < 2) {
        flag = false;
    } else if (n == 2) {
        flag = true;
    } else if (n % 2 == 0) {
        flag = false;
    } else {
        for (var i = 3; i < n; i += 2) {
            if (n % i == 0) {
                flag = false;
                break;
            }

        }
    }
    return flag;
}
getEle("btnSoNguyenTo").addEventListener("click", function () {
    var soNguyenToDauTien = -1;

    for (var i = 0; i < mangSoNguyen.length; i++) {
        if (laNguyenTo(mangSoNguyen[i])) {
            soNguyenToDauTien = mangSoNguyen[i];
            break;
        }

    }
    getEle("spanSNTDauTien").innerHTML = "Số nguyên tố đầu tiên là: " + soNguyenToDauTien;
})
// Viết sự kiện cho nút Đếm số nguyên

getEle("btnDemSoNguyen").addEventListener("click", function () {
    getEle("divSoThuc").className = "form-group d-block";


})
var mangSoThuc = [];
var hienThiMangSoThuc = "Mảng số thực hiện tại là: ";
getEle("btnThemSoThuc").addEventListener("click", function () {

    var soThuc = parseFloat(getEle("txtSoThuc").value);
    mangSoThuc.push(soThuc);
    hienThiMangSoThuc += soThuc + "  ";
    getEle("mangSoThucHienTai").innerHTML = hienThiMangSoThuc;
    getEle("divSoThuc").className = "form-group d-block";

})
getEle("btnDemSoNguyenTrenMangST").addEventListener("click", function () {
    var dem = 0;
    for (var i = 0; i < mangSoThuc.length; i++) {
        if (mangSoThuc[i] - Math.floor(mangSoThuc[i]) == 0) {
            dem++;
        }

    }
    getEle("spanDemSoNguyenMangSoThuc").innerHTML = "Tổng các số nguyên trên mảng số thực là: " + dem;

})
getEle("btnDemSoNguyenTrenSauKhiNoiMang").addEventListener("click", function () {
    var dem = 0;
    var mangSauKhiNoi = mangSoNguyen.concat(mangSoThuc);
    for (var i = 0; i < mangSauKhiNoi.length; i++) {
        if (mangSauKhiNoi[i] - Math.floor(mangSauKhiNoi[i]) == 0) {
            dem++;
        }

    }
    getEle("spanDemSoNguyenSauKhiNoiMang").innerHTML = "Tổng các số nguyên sau khi nối mảng là: " + dem;

})
// Viết sự kiện cho nút So Sánh số dương và số âm
getEle("btnSoSanhDuongAm").addEventListener("click", function () {
    var soLuongSoDuong = 0;
    var soLuongSoAm = 0;
    for (var i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] > 0) {
            soLuongSoDuong++;
        } else if (mangSoNguyen[i] < 0) {
            soLuongSoAm++;
        }

    }
    if (soLuongSoDuong > soLuongSoAm) {
        getEle("spanSoSanhDuongAm").innerHTML = "Số lượng số dương nhiều hơn số lượng số âm";
    } else if (soLuongSoDuong == soLuongSoAm) {
        getEle("spanSoSanhDuongAm").innerHTML = "Số lượng số dương bằng số lượng số âm";
    } else {
        getEle("spanSoSanhDuongAm").innerHTML = "Số lượng số dương ít hơn số lượng số âm";
    }


})
