document.addEventListener('DOMContentLoaded', () => {
   const cards = Array.from(document.querySelectorAll('.project-card'));
   const filterBtns = document.querySelectorAll('.filter-button');
   const prevBtn = document.getElementById('prevBtn');
   const nextBtn = document.getElementById('nextBtn');

   let currentFilter = 'all';
   let currentPage = 1;
   const perPage = 4;

   function getFiltered() {
      return cards.filter(
         (c) => currentFilter === 'all' || c.dataset.category === currentFilter
      );
   }

   function render() {
      const filtered = getFiltered();
      const totalPages = Math.ceil(filtered.length / perPage);

      if (currentPage > totalPages) currentPage = totalPages || 1;

      cards.forEach((c) => c.classList.add('hidden'));

      const start = (currentPage - 1) * perPage;
      const visible = filtered.slice(start, start + perPage);

      visible.forEach((c) => c.classList.remove('hidden'));

      prevBtn.disabled = currentPage === 1;
      nextBtn.disabled = currentPage === totalPages;
   }

   filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
         currentFilter = btn.dataset.filter;
         currentPage = 1;

         filterBtns.forEach((b) => b.classList.remove('is-active'));
         btn.classList.add('is-active');

         render();
      });
   });

   prevBtn.addEventListener('click', () => {
      currentPage--;
      render();
   });

   nextBtn.addEventListener('click', () => {
      currentPage++;
      render();
   });

   render();
});
