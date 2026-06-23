/* Mock API service - Replace with real API calls later */

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export interface Ticket {
  id: string;
  title: string;
  ticketId: string;
  userName: string;
  distance: string;
  timeAgo: string;
  status: 'menunggu' | 'aktif' | 'selesai' | 'dibatalkan';
  relawan?: string;
  date?: string;
  duration?: string;
  description?: string;
}

export interface HistoryItem {
  id: string;
  title: string;
  ticketId: string;
  status: 'selesai' | 'dibatalkan';
  relawan: string;
  date: string;
  duration: string;
}

export const api = {
  async getActiveTickets(): Promise<Ticket[]> {
    await delay(300);
    return [
      {
        id: '1',
        title: 'Bantuan Navigasi',
        ticketId: 'TN-001',
        userName: 'User A',
        distance: '200m jauhnya',
        timeAgo: '3 menit lalu',
        status: 'menunggu',
        description: 'Butuh bantuan navigasi ke halte bus terdekat',
      },
      {
        id: '2',
        title: 'Baca Menu Restoran',
        ticketId: 'TN-002',
        userName: 'User B',
        distance: '450m jauhnya',
        timeAgo: '7 menit lalu',
        status: 'menunggu',
        description: 'Membutuhkan bantuan membaca menu restoran',
      },
      {
        id: '3',
        title: 'Identifikasi Obat',
        ticketId: 'TN-003',
        userName: 'User C',
        distance: '1.2km jauhnya',
        timeAgo: '12 menit lalu',
        status: 'menunggu',
        description: 'Perlu bantuan mengidentifikasi label obat',
      },
    ];
  },

  async getHistory(): Promise<HistoryItem[]> {
    await delay(300);
    return [
      {
        id: '1',
        title: 'Identifikasi Obat',
        ticketId: 'TN-003',
        status: 'selesai',
        relawan: 'Ahmad R.',
        date: '5 Jun 2026',
        duration: '8 mnt',
      },
      {
        id: '2',
        title: 'Baca Menu Restoran',
        ticketId: 'TN-002',
        status: 'selesai',
        relawan: 'Siti M.',
        date: '3 Jun 2026',
        duration: '5 mnt',
      },
      {
        id: '3',
        title: 'Navigasi Jalan',
        ticketId: 'TN-001',
        status: 'selesai',
        relawan: 'Budi K.',
        date: '1 Jun 2026',
        duration: '15 mnt',
      },
      {
        id: '4',
        title: 'Identifikasi Objek',
        ticketId: 'TN-000',
        status: 'dibatalkan',
        relawan: 'Tidak ada relawan',
        date: '28 Mei 2026',
        duration: '-',
      },
    ];
  },

  async getTicketDetail(id: string): Promise<Ticket> {
    await delay(300);
    return {
      id,
      title: 'Detail Permintaan',
      ticketId: `TN-${id.padStart(3, '0')}`,
      userName: 'Budi Santoso',
      distance: '200m jauhnya',
      timeAgo: '3 menit lalu',
      status: 'menunggu',
      relawan: '',
      date: '5 Jun 2026',
      duration: '',
      description: 'Membutuhkan bantuan untuk navigasi ke halte bus terdekat dari lokasi saat ini.',
    };
  },

  async submitRequest(description: string): Promise<{ ticketId: string }> {
    await delay(800);
    console.log('Submitting request:', description);
    return { ticketId: `TN-${Math.floor(Math.random() * 999).toString().padStart(3, '0')}` };
  },
};
