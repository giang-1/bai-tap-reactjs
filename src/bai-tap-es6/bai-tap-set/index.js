class SoThu {
    constructor() {
        this.danhSachDongVat = [];
    }

    themDongVat(dongVat) {
        this.danhSachDongVat.push(dongVat);
        console.log(`${dongVat} đã được thêm vào danh sách.`);
    }

    kiemTraDongVat(dongVat) {
        if (this.danhSachDongVat.includes(dongVat)) {
            console.log(`${dongVat} đã có trong danh sách.`);
        } else {
            console.log(`${dongVat} chưa có trong danh sách.`);
        }
    }

    xoaDongVat(dongVat) {
        const index = this.danhSachDongVat.indexOf(dongVat);
        if (index !== -1) {
            this.danhSachDongVat.splice(index, 1);
            console.log(`${dongVat} đã được xóa khỏi danh sách.`);
        } else {
            console.log(`${dongVat} không tồn tại trong danh sách.`);
        }
    }

    inDanhSachDongVat() {
        console.log("Danh sách các loài động vật hiện có trong sở thú:");
        this.danhSachDongVat.forEach(dongVat => {
            console.log(dongVat);
        });
    }
}

// Một số thao tác Peter có thể thực hiện
const soThuCuaPeter = new SoThu();
soThuCuaPeter.themDongVat("Sư tử");
soThuCuaPeter.themDongVat("Hươu");
soThuCuaPeter.kiemTraDongVat("Sư tử");
soThuCuaPeter.xoaDongVat("Hươu");
soThuCuaPeter.inDanhSachDongVat();
