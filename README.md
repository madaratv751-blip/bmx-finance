# BMX Finance 💸

Nền tảng cho vay và đầu tư tiền điện tử - Borrow Money Instantly

## Giới thiệu

BMX Finance là một ứng dụng fintech hiện đại cho phép người dùng:
- 📊 **Vay tiền** ngay lập tức với lãi suất cạnh tranh
- 💰 **Đầu tư** vào các khoản vay và nhận lợi suất
- 👛 **Quản lý ví** và thanh toán dễ dàng
- 🔐 **KYC Verify** để bảo vệ tài khoản
- ⚙️ **Quản trị** hệ thống (Admin)

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14
- **Styling**: TailwindCSS
- **Animation**: Framer Motion
- **State**: React Hooks
- **Deployment**: Vercel

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: MongoDB Atlas
- **File Storage**: Cloudinary
- **Payments**: Stripe, PayPal
- **Deployment**: Railway

### Database
- **Primary**: MongoDB Atlas
- **Collections**: users, loans, payments, kyc

## 📁 Cấu trúc Dự án

```
bmx-finance/
├── frontend/
│   ├── pages/
│   │   ├── index.tsx           (Home)
│   │   ├── borrow.tsx          (Borrow loans)
│   │   ├── investor.tsx        (Investment)
│   │   ├── wallet.tsx          (Wallet)
│   │   ├── admin.tsx           (Admin dashboard)
│   │   ├── profile.tsx         (User profile)
│   │   ├── login.tsx           (Login)
│   │   └── register.tsx        (Register)
│   ├── components/
│   │   ├── ui/                 (Buttons, Cards, etc)
│   │   ├── finance/            (Loan calc, Payment card)
│   │   └── admin/              (Admin components)
│   ├── styles/
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.js
│
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── loanController.js
│   │   ├── paymentController.js
│   │   └── adminController.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── loanRoutes.js
│   │   └── adminRoutes.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Loan.js
│   │   ├── Payment.js
│   │   └── KYC.js
│   ├── middleware/
│   │   ├── jwtAuth.js
│   │   ├── adminOnly.js
│   │   └── rateLimiter.js
│   ├── config/
│   │   └── database.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── .gitignore
├── .env.example
├── docker-compose.yml
└── README.md
```

## 🚀 Cách Chạy Dự Án

### Yêu cầu
- Node.js v18+
- MongoDB Atlas account
- Stripe account
- Cloudinary account

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Truy cập: http://localhost:3000

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Cập nhật .env với credentials của bạn
npm start
```

Backend chạy trên: http://localhost:5000

## 📊 Tính Năng Chính

### 1. Authentication (Xác thực)
- Register/Login
- JWT Token
- OTP Verification
- Password Hashing (bcrypt)

### 2. Borrow (Vay tiền)
- Tính toán lãi suất tự động
- Duyệt dự báo khoản vay hàng tháng
- KYC verification
- Instant approval

### 3. Investor (Nhà đầu tư)
- Xem danh sách các khoản vay
- ROI tracking
- Fund loans
- Earnings dashboard

### 4. Wallet (Ví)
- Xem số dư
- Deposit/Withdraw
- Card management
- Transaction history

### 5. Admin (Quản trị)
- Approve/Reject users
- View analytics
- Manage investors
- KYC management

## 🔐 Security

- ✅ JWT Authentication
- ✅ Password Hashing (bcrypt)
- ✅ OTP Verification
- ✅ HTTPS/SSL
- ✅ CORS Protection
- ✅ Rate Limiting
- ✅ Input Validation
- ✅ Helmet.js for headers

## 📡 API Endpoints

### Authentication
```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/verify-otp
POST   /api/auth/refresh-token
```

### Loans
```
POST   /api/loan/create
GET    /api/loan/all
GET    /api/loan/:id
POST   /api/loan/pay
GET    /api/loan/my-loans
```

### Admin
```
POST   /api/admin/approve/:userId
POST   /api/admin/reject/:userId
GET    /api/admin/users
GET    /api/admin/analytics
```

## 🗄️ Database Schemas

### User
```javascript
{
  fullname: String,
  email: String,
  password: String,
  phone: String,
  role: String (user, investor, admin),
  walletBalance: Number,
  verified: Boolean,
  createdAt: Date
}
```

### Loan
```javascript
{
  borrowerId: ObjectId,
  amount: Number,
  duration: Number (months),
  interest: Number,
  status: String (pending, approved, rejected, completed),
  monthlyPayment: Number,
  createdAt: Date
}
```

### Payment
```javascript
{
  userId: ObjectId,
  loanId: ObjectId,
  amount: Number,
  stripeId: String,
  status: String (pending, completed, failed),
  createdAt: Date
}
```

## 🌐 Environment Variables

```env
# Frontend
NEXT_PUBLIC_API_URL=https://api.bmxfinance.com

# Backend
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/bmxfinance
JWT_SECRET=your_super_secret_key_here
JWT_EXPIRE=7d

# Stripe
STRIPE_SECRET=sk_live_your_stripe_key
STRIPE_PUBLIC=pk_live_your_public_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password

# OTP
OTP_EXPIRY=300
```

## 📦 Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Backend (Railway)
1. Create Railway account
2. Connect GitHub repository
3. Add environment variables
4. Deploy

### Database (MongoDB Atlas)
1. Create cluster
2. Create database user
3. Get connection string
4. Add to .env

## 📝 Lịch Sử Thay Đổi

### v1.0.0 (Initial Release)
- ✅ Authentication system
- ✅ Loan management
- ✅ Investment features
- ✅ Wallet functionality
- ✅ Admin dashboard
- ✅ User profile

## 🤝 Contribute

Chúng tôi đón nhận các đóng góp! Vui lòng:
1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT License - xem file LICENSE để chi tiết

## 📧 Contact

Email: support@bmxfinance.com
Website: https://bmxfinance.com
GitHub: https://github.com/madaratv751-blip/bmx-finance

---

**Made with ❤️ by BMX Finance Team**
