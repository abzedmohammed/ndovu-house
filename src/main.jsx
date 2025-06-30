import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './app/store.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
		},
	}
});

createRoot(document.getElementById('root')).render(
	<>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<App />
					<Toaster
						position='top-center'
						reverseOrder={false}
						toastOptions={{
							duration: 2500,
						}}
          />
          <ReactQueryDevtools initialIsOpen={false} />
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	</>
);
