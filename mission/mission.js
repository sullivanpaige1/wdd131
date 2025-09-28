<script>
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("theme-select");
  select.addEventListener("change", function () {
    document.body.className = this.value;
  });
});
</script>

