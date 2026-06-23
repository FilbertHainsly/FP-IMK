import { Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';

// Auth pages
import Splash from '../pages/auth/Splash';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import VerifikasiKTP from '../pages/auth/VerifikasiKTP';
import MenungguVerifikasi from '../pages/auth/MenungguVerifikasi';

// Mode
import PilihMode from '../pages/mode/PilihMode';

// Dashboard
import Dashboard from '../pages/dashboard/Dashboard';

// Bantuan
import DaftarBantuan from '../pages/bantuan/DaftarBantuan';
import DetailBantuan from '../pages/bantuan/DetailBantuan';
import RekamBantuan from '../pages/bantuan/RekamBantuan';
import StatusBantuan from '../pages/bantuan/StatusBantuan';
import FormPengajuan from '../pages/bantuan/FormPengajuan';
import PengajuanBerhasil from '../pages/bantuan/PengajuanBerhasil';

// Riwayat
import Riwayat from '../pages/riwayat/Riwayat';
import DetailRiwayat from '../pages/riwayat/DetailRiwayat';

// Profile
import Profile from '../pages/profile/Profile';
import EditProfile from '../pages/profile/EditProfile';
import Settings from '../pages/profile/Settings';

// AI
import KameraAI from '../pages/ai/KameraAI';
import HasilAnalisis from '../pages/ai/HasilAnalisis';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Splash */}
      <Route path="/" element={<Splash />} />

      {/* Auth routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Auth - standalone (has own navbar) */}
      <Route path="/verifikasi-ktp" element={<VerifikasiKTP />} />
      <Route path="/menunggu-verifikasi" element={<MenungguVerifikasi />} />
      <Route path="/pilih-mode" element={
        <ProtectedRoute><PilihMode /></ProtectedRoute>
      } />

      {/* Main app with bottom nav */}
      <Route element={
        <ProtectedRoute requireVerified>
          <MainLayout />
        </ProtectedRoute>
      }>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bantuan" element={<DaftarBantuan />} />
        <Route path="/riwayat" element={<Riwayat />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/setelan" element={<Settings />} />
      </Route>

      {/* Detail pages (have own navbar, no bottom nav) */}
      <Route path="/bantuan/:id" element={
        <ProtectedRoute requireVerified><DetailBantuan /></ProtectedRoute>
      } />
      <Route path="/bantuan/:id/rekam" element={
        <ProtectedRoute requireVerified><RekamBantuan /></ProtectedRoute>
      } />
      <Route path="/bantuan/:id/status" element={
        <ProtectedRoute requireVerified><StatusBantuan /></ProtectedRoute>
      } />
      <Route path="/bantuan/ajukan" element={
        <ProtectedRoute requireVerified><FormPengajuan /></ProtectedRoute>
      } />
      <Route path="/bantuan/berhasil" element={
        <ProtectedRoute requireVerified><PengajuanBerhasil /></ProtectedRoute>
      } />
      <Route path="/riwayat/:id" element={
        <ProtectedRoute requireVerified><DetailRiwayat /></ProtectedRoute>
      } />
      <Route path="/profil/edit" element={
        <ProtectedRoute requireVerified><EditProfile /></ProtectedRoute>
      } />

      {/* AI pages */}
      <Route path="/kamera-ai" element={
        <ProtectedRoute requireVerified><KameraAI /></ProtectedRoute>
      } />
      <Route path="/hasil-analisis" element={
        <ProtectedRoute requireVerified><HasilAnalisis /></ProtectedRoute>
      } />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}