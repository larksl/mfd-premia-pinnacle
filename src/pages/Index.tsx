import { Helmet } from 'react-helmet-async';
import Leaderboard from '@/components/Leaderboard';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MFD Premia Leaderboard | Lark Finserv Accelerator Program</title>
        <meta 
          name="description" 
          content="Track top performing Mutual Fund Distributors in the MFD Premia accelerator program. See who's leading in LAMF disbursements and portfolio analysis." 
        />
      </Helmet>
      <main>
        <Leaderboard />
      </main>
    </>
  );
};

export default Index;
