export default function DashboardLoading() {
	return (
		<div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
			<div className="text-center">
				<div className="animate-spin w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto mb-4"></div>
				<p className="text-gray-400">Loading dashboard...</p>
			</div>
		</div>
	);
}
