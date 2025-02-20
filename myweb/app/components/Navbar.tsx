import React from "react";
import Link from "next/link";
import Product from "../components/Product";

const Navbar = () => {
  return (
    <div>
      <div>
        <div>
          <ul className="menu menu-horizontal bg-base-200 flex justify-around p-3 bg-green-700 text-white">
            <div>
              <img
                src="https://cdn.discordapp.com/attachments/1300816466379014237/1342018444433821706/image.png?ex=67b81b92&is=67b6ca12&hm=10149115d0c845edade7946d6e39f20328ab5fad978c02c8d9b896706b72ac4e&"
                alt="PetShelter Logo"
                className="w-50 h-10"
              />
            </div>
            <li>
              <Link href="/">Trang chủ</Link>
            </li>
            <li>
              <Link href="#">Nhận Nuôi</Link>
            </li>
            <li>
              <a href="#">Ủng hộ</a>
            </li>
            <li>
              <a href="#">Sự Kiện</a>
            </li>
            <li>
              {" "}
              <Link href="/Productcard">Sản Phẩm</Link>{" "}
            </li>
            <li>
              <a href="#">Thú Y</a>
            </li>
            <li>
              <a href="#">Liên hệ</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center mb-10">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Tìm kiếm thú cưng..."
              className="w-full py-3 pl-10 pr-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between p-10">
        {/* Left Side - Text and Stats */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-green-900 mb-8">
            Cùng Nhau Tạo Một Mái Ấm
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Để Không Một Bé Chó Mèo Nào Phải Lang Thang!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            <div className="bg-green-100 p-8 rounded-full shadow-lg text-center w-32 h-32 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-green-900">Đang Chờ</h3>
              <p className="text-2xl font-bold text-green-700">400+</p>
            </div>
            <div className="bg-green-100 p-8 rounded-full shadow-lg text-center w-32 h-32 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-green-900">
                Ca Cứu Hộ
              </h3>
              <p className="text-2xl font-bold text-green-700">850+</p>
            </div>
            <div className="bg-green-100 p-8 rounded-full shadow-lg text-center w-32 h-32 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-green-900">
                Đã Cứu Hộ
              </h3>
              <p className="text-2xl font-bold text-green-700">750+</p>
            </div>
            <div className="bg-green-100 p-8 rounded-full shadow-lg text-center w-32 h-32 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-green-900">
                Chưa Sẵn Sàng
              </h3>
              <p className="text-2xl font-bold text-green-700">225+</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="mt-10 px-8 py-4 bg-green-700 text-white rounded-full text-lg">
              Liên hệ với chúng tôi
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://cdn.discordapp.com/attachments/1300816466379014237/1341967607493951520/image.png?ex=67b7ec3a&is=67b69aba&hm=2c417231532543c96b63ca78e4e4405a42e7abe73c150d88860d8ba28fc7dd23&"
            alt="Pet Shelter"
            className="w-50 ml-30 h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="bg-gray-100 p-10 text-center">
        <p className="text-xl text-gray-800">
          PetShelter là nền tảng kết nối cộng đồng yêu thú cưng, với sứ mệnh cứu
          hộ, chăm sóc và tìm mái ấm cho những thú cưng bị bỏ rơi, hoang lạc,
          hoặc bị bạo hành.
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-green-700 text-white rounded-full text-lg">
            Hiểu Rõ Thêm Về Chúng Tôi
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between p-10">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-green-900 mb-8">
            Hiểu Rõ Thêm Về Chúng Tôi
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            PetShelter là nền tảng kết nối cộng đồng yêu thú cưng, với sứ mệnh
            cứu hộ, chăm sóc và tìm mái ấm trọn đời cho những thú cưng bị bỏ
            rơi, hoang lạc, hoặc bạo hành.
          </p>

          <h3 className="text-2xl font-semibold text-green-900 mb-4">
            Chúng tôi cam kết:
          </h3>
          <ul className="list-disc list-inside text-xl text-gray-700 mb-8">
            <li>
              Cứu Hộ & Chăm Sóc: Mang lại sức khỏe và niềm tin mới cho các bé.
            </li>
            <li>
              Tìm Gia Đình Mới: Kết nối thú cưng với những mái ấm yêu thương.
            </li>
            <li>
              Nâng Cao Nhận Thức: Lan tỏa trách nhiệm chăm sóc thú cưng qua các
              hoạt động cộng đồng.
            </li>
          </ul>

          <p className="text-xl text-gray-700">
            PetShelter không chỉ là nơi nhận nuôi thú cưng, mà còn là không gian
            gắn kết cộng đồng yêu động vật, cùng xây dựng tương lai tốt đẹp hơn
            cho tất cả các bé. Hãy cùng chúng tôi lan tỏa yêu thương!
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src="https://cdn.discordapp.com/attachments/1300816466379014237/1341968022000369685/image.png?ex=67b7ec9d&is=67b69b1d&hm=3ae05ddd1511876880d60ed9fddaf4c742ec7950469fa369c8171f9c64c7cb4e&"
            alt="Pet Shelter"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center py-10">
          <div className="border border-green-300 p-4 rounded-xl flex items-center justify-between text-lg font-semibold text-green-700">
            Các Sản Phẩm Gây Quỹ
          </div>
        </div>
        <div>
          <Product></Product>
        </div>
      </div>
      
      <div className="border rounded-xl bg-green-100  ">
      <div className="flex justify-center items-center py-10">
          <div className="border border-green-300 p-4 rounded-xl flex items-center justify-between text-lg font-semibold text-green-700">
            Pet Ngoan Trong Tuần
          </div>
        </div>
        <div>

        </div>
      </div>

      {/* Footer */}
      <div>
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              ACME Industries Ltd
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Navbar;
