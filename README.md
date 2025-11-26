# Email AI Personalize 🚀

AI-powered personalized email marketing platform built with modern web technologies.

## ✨ Features

- 🤖 **AI-Powered Personalization**: Generate personalized email content for each recipient
- 🎯 **Smart Segmentation**: Automatically segment audiences based on behavior
- 📊 **Advanced Analytics**: Track campaign performance with detailed insights
- 🎨 **Beautiful UI**: Clean, modern interface built with Tailwind CSS
- ⚡ **Real-time Updates**: Instant data synchronization with Supabase
- 📱 **Responsive Design**: Works seamlessly on all devices

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database & Auth**: [Supabase](https://supabase.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- npm or yarn package manager
- A Supabase account ([sign up here](https://supabase.com/))
- A Vercel account for deployment (optional)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/JohnRSandoval/email-ai-personalize.git
cd email-ai-personalize
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Then update the values with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Set up Supabase

1. Create a new project in [Supabase](https://supabase.com/)
2. Run the following SQL in the Supabase SQL Editor to create tables:

```sql
-- Create campaigns table
create table campaigns (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users not null,
  name text not null,
  subject text not null,
  content text not null,
  status text default 'draft',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create subscribers table
create table subscribers (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users not null,
  email text not null unique,
  first_name text,
  last_name text,
  status text default 'active',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table campaigns enable row level security;
alter table subscribers enable row level security;

-- Create policies
create policy "Users can view their own campaigns"
  on campaigns for select
  using (auth.uid() = user_id);

create policy "Users can insert their own campaigns"
  on campaigns for insert
  with check (auth.uid() = user_id);

create policy "Users can view their own subscribers"
  on subscribers for select
  using (auth.uid() = user_id);

create policy "Users can insert their own subscribers"
  on subscribers for insert
  with check (auth.uid() = user_id);
```

3. Update your Supabase types:

```bash
npx supabase gen types typescript --project-id YOUR_PROJECT_ID > src/types/supabase.ts
```

### 5. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
email-ai-personalize/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── dashboard/          # Dashboard pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Landing page
│   │   └── globals.css         # Global styles
│   ├── components/             # React components
│   │   ├── ui/                 # UI components (Header, Footer)
│   │   └── dashboard/          # Dashboard components
│   ├── lib/                    # Utility functions
│   │   └── supabase.ts         # Supabase client
│   └── types/                  # TypeScript types
│       ├── index.ts            # Common types
│       └── supabase.ts         # Supabase generated types
├── public/                     # Static files
├── .env.local.example          # Environment variables template
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com/)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JohnRSandoval/email-ai-personalize)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)
- [Lucide Icons](https://lucide.dev/)

## 📧 Contact

For questions or support, please open an issue in the GitHub repository.

---

Built with ❤️ using Next.js and Supabase