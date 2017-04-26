# Contact Manager Server

Project này sử dụng Node.js v6+ để thực hành HTTP và Form cho series [Thử Nghiệm Với Angular](http://www.tiepphan.com/category/web/lap-trinh-angular/)

## Các phần mềm cần thiết

Các bạn cần cài đặt Node.js, Express, Mongoose. Bằng cách chạy lệnh sau trong Terminal/CMD.

`$ npm i`

Trong quá trình development, các bạn có thể cài đặt Modemon để tự restart server khi thay đổi.

`$ npm i -g nodemon`

Ngoài ra các bạn cần cài đặt Mongodb hoặc sử dụng dịch vụ của [MLab](https://mlab.com/), sau đó copy file `.env-example` thành file `.env` và thêm các config cho các key sau đây:

```
DB_HOST=YOUR-DB-CONFIG
DB_USER=
DB_PASS=
PORT=8910
```

## Running

Sau khi cài đặt và config các phần cần thiết, bạn có thể khởi động app bằng lệnh:

`$ npm start`

Hoặc

`$ npm run serve`

Mở trình duyệt/Postman tại địa chỉ [http://localhost:8910](http://localhost:8910) hoặc port của bạn cài đặt ở file `.env`

## Các routes đã được định nghĩa

| STT  | Method  | Route | Mô tả |
| ------------- | ------------- | ------------- | ------------- |
| 1 | `GET`  | `/api/contacts`  | Lấy về các contacts có trong hệ thống |
| 2 | `POST`  | `/api/contacts`  | Tạo mới một contact |
| 3 | `GET`  | `/api/contacts/:id` | Lấy về một contact theo `id` |
| 4 | `PUT`  | `/api/contacts/:id`  | Cập nhật một contact theo `id` |
| 5 | `DELETE`  | `/api/contacts/:id`  | Xóa một contact theo `id` |
