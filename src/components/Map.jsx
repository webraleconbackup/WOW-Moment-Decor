const Map = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 pt-4">
      <div className="mx-auto max-w-8xl px-4 lg:px-15">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
            Visit Our Office
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            Visit our office in Noida. We provide premium birthday, anniversary,
            baby welcome, proposal, and surprise decoration services across
            Noida and nearby areas.
          </p>
        </div>

        {/* Full Width Map */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
          <iframe
            title="24x7 Decoration Noida"
            src="https://maps.google.com/maps?q=Noida%2C%20Uttar%20Pradesh%2C%20India&z=13&output=embed"
            className="h-[350px] w-full md:h-[500px] lg:h-[650px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;