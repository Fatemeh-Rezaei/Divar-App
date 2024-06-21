const e2p = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

const p2e = (s) =>
  s.toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

const sp = (number) => {
  const separatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  const joinedNumber = separatedNumber.join(",");
  return e2p(joinedNumber);
};

export { e2p, p2e, sp };
